import { projects } from "../data/projects"
import { hyphenateWords } from "./hyphenateWords"

export const findProject = (str) => {
  return Object.assign(...projects.filter(project => hyphenateWords(project.title) === hyphenateWords(str)))
}