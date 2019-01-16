import React from "react";

const Container = ({ children }: { children: any }) => (
  <div className="container-fluid">{children}</div>
);

const Row = ({ children }: { children: any }) => (
  <div className="row">{children}</div>
);

const Col = ({ children, size }: { children: any; size: string }) => (
  <div className={size}>{children}</div>
);

export { Container, Row, Col };
