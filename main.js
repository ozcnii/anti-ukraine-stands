const get_elements_by_inner = (word) => {
  const reg = new RegExp(word, "gim");
  return [
    ...document.querySelectorAll("span"),
    ...document.querySelectorAll("p"),
    ...document.querySelectorAll("a"),
  ].filter((elem) => !!elem.textContent.match(reg));
};

const remove_elements = () => {
  const urkaine_stand_elements = get_elements_by_inner("🇺🇦");

  urkaine_stand_elements.forEach((elem) => {
    let parent = elem.parentElement;
    while (parent) {
      if (parent.tagName === "DIV") {
        parent.remove();
        parent = false;
      } else if (parent.tagName === "BODY") {
        parent.innerHTML = `
          <h1>Please off extension on this site</h1>
        `;
        parent = null;
      } else {
        parent = parent.parentElement;
      }
    }
  });
};

const handler = () => {
  let currentHref = location.href;
  if (currentHref !== location.href) {
    currentHref = location.href;
    remove_elements();
  }
};

remove_elements();
setInterval(handler, 1000);
