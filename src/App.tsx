import { ChangeEvent, useCallback, useEffect, useState } from "react";
import shortid from "shortid";
import Coaster from "./Coaster";
import { Kind, kinds, Weights } from "./constants";
import { Waves } from "./Waves";
import { stepX, stepY } from "./Pattern";
import "./styles.css";

export default function App() {
  const urlParams = new URLSearchParams(document.location.search);
  const [seed, setSeed] = useState(urlParams.get("seed") ?? shortid());
  const [weights, setWeights] = useState<Weights>({
    a: parseInt(urlParams.get("a") || "", 10) || 3,
    b: parseInt(urlParams.get("b") || "", 10) || 2,
    c: parseInt(urlParams.get("c") || "", 10) || 2,
    d: parseInt(urlParams.get("d") || "", 10) || 1,
  });

  useEffect(() => {
    const url = new URL(document.location.href);
    kinds.forEach((kind) => {
      url.searchParams.set(kind, weights[kind].toString());
    });
    url.searchParams.set("seed", seed);
    window.history.replaceState(null, "", url.toString());
  }, [weights, seed]);

  const randomize = useCallback(() => {
    setSeed(shortid());
  }, []);

  const exportSVG = useCallback(() => {
    const svg = document.getElementById("coaster")?.outerHTML;
    const content = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>${svg}`;
    const blob = new Blob([content], { type: "image/svg+xml;charset=utf-8;" });
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `coaster-${seed}.svg`);
    link.setAttribute("style", "display:block;height:0;Width:0");
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  }, []);

  const updateWeight = useCallback(
    (kind: Kind, e: ChangeEvent<HTMLInputElement>) => {
      const weight = e.target.value;
      if (weight) {
        setWeights((w) => ({
          ...w,
          [kind]: Math.max(parseInt(weight, 10), 0),
        }));
      }
    },
    []
  );

  const updateSeed = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSeed(e.target.value);
  }, []);

  return (
    <main className="App">
      <h1>Seihaga coaster generator</h1>

      <div className="actions">
        <button type="button" onClick={randomize}>
          Get a random pattern!
        </button>
        <button type="button" onClick={exportSVG}>
          Export
        </button>
      </div>
      <div className="coaster">
        <Coaster seed={seed} weights={weights} />
      </div>
      <div className="seed-control">
        <label htmlFor="seed-field">Seed: </label>
        <input type="text" value={seed} onChange={updateSeed} />
      </div>
      <fieldset className="weight-controls">
        <legend>Probability weights</legend>
        {kinds.map((kind) => {
          const Wave = Waves[kind];
          return (
            <div key={kind} className="weight-control">
              <label htmlFor={`weight-${kind}`}>
                <svg
                  role="img"
                  aria-label={kind.toUpperCase()}
                  width={`${stepX * 4}px`}
                  height={`${stepY * 4}px`}
                  viewBox={`0 0 ${stepX * 2} ${stepY * 2}`}
                >
                  <title>{kind.toUpperCase()}</title>
                  <Wave type="whole" />
                </svg>
              </label>
              <input
                type="number"
                id={`weight-${kind}`}
                defaultValue={weights[kind]}
                onChange={updateWeight.bind(null, kind)}
              />
            </div>
          );
        })}
      </fieldset>
    </main>
  );
}
