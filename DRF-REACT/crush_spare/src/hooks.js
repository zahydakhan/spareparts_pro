import { useState } from "react";

export function useLocalState(localItem) {
  const [loc, setState] = useState(localStorage.getItem(localItem));

  function setLoc(newItem) {
    localStorage.setItem(localItem, newItem);
    setState(newItem);
  }
  return [loc, setLoc];
}

export function useLocalStateCart(localItem) {
  let item = [];
  if (JSON.parse(localStorage.getItem(localItem))) {
    item = JSON.parse(localStorage.getItem(localItem));
  } else {
    item = [];
  }
  const [loc, setState] = useState(item);

  function setLoc(newItem) {
    localStorage.setItem(localItem, JSON.stringify(newItem));
    setState(newItem);
  }
  return [loc, setLoc];
}
