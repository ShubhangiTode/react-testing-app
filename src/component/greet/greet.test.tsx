import { render,screen} from "@testing-library/react";
import { Greet } from "./greet";

test("greet renders correctly",()=>{
    render(<Greet/>)
  const textElement= screen.getByText(/hello/i)
  expect (textElement).toBeInTheDocument()
})

test("greet renders correctly with props",()=>{
    render(<Greet name="vishwas"/>)
  const textElement= screen.getByText(/hello/i)
  expect (textElement).toBeInTheDocument()
})    