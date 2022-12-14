const remove_elements = () => {
  const deepest = document.evaluate(
    "//*[contains(text(), 'πΊπ¦')]",
    document.body,
    null,
    XPathResult.ANY_TYPE,
    null
  ).iterateNext();
  deepest && deepest.closest('div').remove();
};

const observer = new MutationObserver(remove_elements);

document.addEventListener("DOMContentLoaded", () => {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
