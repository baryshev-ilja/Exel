import { $ } from '../../core/dom-framework';

function resizeHandler(rootElement, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  const sideProp = type === 'col' ? 'bottom' : 'right';
  let value;

  $resizer.css({
    opacity: 1,
    [sideProp]: '-3000px',
  });

  document.onmousemove = (evt) => {
    if (type === 'col') {
      const delta = evt.pageX - coords.right;
      value = coords.width + delta;
      $resizer.css({
        right: `${-delta}px`,
      });
    } else {
      const delta = evt.pageY - coords.bottom;
      value = coords.height + delta;
      $resizer.css({
        bottom: `${-delta}px`,
      });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;

    if (type === 'col') {
      $parent.css({
        width: `${value}px`,
      });
      rootElement
        .findAll(`[data-col="${$parent.data.col}"]`)
        .forEach((element) => (element.style.width = `${value}px`));
    } else {
      $parent.css({
        height: `${value}px`,
      });
    }

    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    });
    document.onmouseup = null;
  };
}

export { resizeHandler };
