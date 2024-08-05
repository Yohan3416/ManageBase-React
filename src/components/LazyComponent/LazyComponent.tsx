import { Suspense, LazyExoticComponent } from "react";
import LazyLoading from "./LazyLoading";

export default function LazyComponent(props: {
  lazyChildren: LazyExoticComponent<() => JSX.Element>;
  title: string;
}) {
  return (
    <Suspense fallback={<LazyLoading title={props.title} />}>
      <props.lazyChildren />
    </Suspense>
  );
}
