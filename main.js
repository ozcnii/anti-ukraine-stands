const get_elements_by_inner = (word) => {
  const reg = new RegExp(word, "gim");
  return [
    ...document.querySelectorAll("div"),
    ...document.querySelectorAll("span"),
    ...document.querySelectorAll("p"),
    ...document.querySelectorAll("a"),
  ].filter((elem) => !!elem.textContent.match(reg));
};

const urkaine_stand_elements = get_elements_by_inner("ukraine");

urkaine_stand_elements.forEach((elem) => elem.remove());
