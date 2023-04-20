import type { JSXElement } from "solid-js"
import { Title } from "solid-start"

export default function (props: { children?: JSXElement }) {
  return <Title>玩转 AI 学院{props.children ? " | " + props.children : ""}</Title>
}
