import { projects } from "../data/projects"
import { hyphenateWords } from "./hyphenateWords"

export const findProject = (str) => {
  return projects.find(project => hyphenateWords(project.title) === str)
}