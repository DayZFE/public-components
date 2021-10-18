import React, { useEffect, useState, useMemo } from "react";
import { Alert, Tabs, Typography } from "antd";
import marked from "marked";
import hl from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
import styled from "styled-components";

const Wrapper = styled.div`
  pre {
    padding: 1em;
    background-color: #e0dce6;
    border-radius: 1em;
  }
`;

const Area = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 1em;
`;

const usedMarked = marked.setOptions({
  highlight(code, lang) {
    return hl.highlight(code, { language: lang }).value;
  },
});

export default function Tool(props: {
  content: string;
  title: string;
  example: string;
  code: string;
}) {
  const { content, example, title, code } = props;
  const usedContent = useMemo(() => {
    return usedMarked(content);
  }, [content]);
  const usedCode = useMemo(() => {
    const resultStr = hl.highlight(code, {
      language: "typescript",
    }).value;
    return resultStr;
  }, [code]);

  return (
    <Wrapper>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Area>
        <div>
          <Typography.Title level={3}>API</Typography.Title>
          <div dangerouslySetInnerHTML={{ __html: usedContent }}></div>
        </div>
        <div>
          <Typography.Title level={3}>源码</Typography.Title>
          <pre>
            <code
              dangerouslySetInnerHTML={{
                __html: usedCode,
              }}
            ></code>
          </pre>
        </div>
      </Area>
      {example ? (
        <iframe
          src={example}
          style={{ width: "100%", height: "600px", border: "none" }}
        />
      ) : (
        <Alert type='warning' message='未发现用例' />
      )}
    </Wrapper>
  );
}
