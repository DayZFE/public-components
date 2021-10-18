import { useEffect, useMemo, useState } from "react";

const globs = import.meta.glob("../public/docs/*.md");
const names = Object.keys(globs).map((el) => {
  const arr = el.split("/");
  return arr[arr.length - 1];
});

export interface ConfigItem {
  name: string;
  example: string;
  title: string;
  content: string;
}

export default function useConfig() {
  const [result, setResult] = useState<string[]>([]);
  const [codeResult, setCodeResult] = useState<string[]>([]);
  useEffect(() => {
    Promise.all(
      names.map((el) => fetch("/docs/" + el).then((res) => res.text()))
    ).then((res) => {
      setResult(res);
    });
    Promise.all(
      names.map((el) =>
        import("./tools/src/" + el.split(".")[0] + ".tsx?raw").then((res) => {
          return res?.default || "";
        })
      )
    ).then((res) => {
      setCodeResult(res);
    });
  }, []);
  return useMemo(() => {
    if (result && codeResult) {
      return result.map((el, key) => {
        let content = "";
        const title = el.match(/(?<=\*\*\*)(.|\n)*(?=\*\*\*)/g)?.[0] || "";
        content = el.replace(/\*\*\*(.|\n)*\*\*\*/g, "");
        const example = el.match(/(?<=\[\[)(.|\n)*(?=\]\])/g)?.[0] || "";
        content = content.replace(/\[\[(.|\n)*\]\]/g, "");
        const name = names[key].split(".")[0];
        return {
          name,
          title,
          example,
          content,
          code: codeResult[key] || "",
        };
      });
    }
    return [];
  }, [result, codeResult]);
}
