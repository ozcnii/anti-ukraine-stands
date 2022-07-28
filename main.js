const remove_elements = () => {
  const deepest = document.evaluate(
    "//*[contains(text(), '🇺🇦')]",
    document.body,
    null,
    XPathResult.ANY_TYPE,
    null
  ).iterateNext();
  deepest && deepest.closest('div').remove();
};

let currentHref = location.href;

const observer = new MutationObserver(() => {
  remove_elements();
});

document.addEventListener("DOMContentLoaded", () => {
  observer.observe(document.querySelector("body"), {
    childList: true,
    subtree: true,
  });
});
