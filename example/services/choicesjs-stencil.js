function getChoiceData(data, choices) {
  return {
    ...choices.find((choice) => choice.value === data.value),
    ...data
  };
}

function createIcon(icon, color) {
  const iconClassName = icon ? `yarn-icon yarn-icon--${ icon }` : '';

  return iconClassName
    ? `<span class="${ iconClassName }" ${ color ? ` style="color: ${ color };"` : '' }></span>`
    : '';
}

function createRemoveButton(visible) {
  return visible
    ? '<button type="button" class="choices__button" data-button=""></button>'
    : '';
}

export const choices = [
  { value: 'superstar', label: 'Superstar', selected: false, disabled: false, icon: 'footwear', color: '#d7f5cc' },
  { value: 'adizero', label: 'adizero', selected: false, disabled: false, icon: 'footwear', color: '#66b0ff' },
  { value: 'stansmith', label: 'Stan Smith', selected: true, disabled: false, icon: 'footwear', color: '#e1e1e1' },
  { value: 'gazelle', label: 'Gazelle', selected: false, disabled: false, icon: 'footwear', color: '#ff720d' },
  { value: 'ultraboost', label: 'ultraboost', selected: true, disabled: false, icon: 'footwear', color: '#a851ff' },
  { value: 'nmd', label: 'NMD', selected: false, disabled: false, icon: 'footwear', color: '#ff339c' },
  { value: 'yeezy', label: 'YEEZY', selected: false, disabled: false, icon: 'footwear', color: '#333' },
  { value: 'campus', label: 'Campus', selected: false, disabled: false, icon: 'footwear', color: '#b0d400' },
  { value: 'zx500', label: 'ZX 500', selected: false, disabled: true, icon: 'footwear', color: '#f2b400' },
  { value: 'samba', label: 'Samba', selected: false, disabled: false, icon: 'footwear', color: '#1a1a1a' },
  { value: 'predator', label: 'Predator', selected: false, disabled: false, icon: 'footwear', color: '#ff339c' },
  { value: 'munchen', label: 'Munchen', selected: false, disabled: false, icon: 'footwear', color: '#14aecc' },
  { value: 'zxflux', label: 'ZX Flux', selected: false, disabled: false, icon: 'footwear', color: '#ff75bc' },
  { value: 'eqt', label: 'EQT', selected: false, disabled: false, icon: 'footwear', color: '#405fff' },
  { value: 'solar', label: 'Solar', selected: false, disabled: false, icon: 'footwear', color: '#ff720d' },
  { value: 'copa', label: 'Copa', selected: false, disabled: true, icon: 'footwear', color: '#1a1a1a' },
  { value: 'terrex', label: 'Terrex', selected: false, disabled: false, icon: 'footwear', color: '#65cc3d' },
  { value: 'pureboost', label: 'pureboost', selected: false, disabled: false, icon: 'footwear', color: '#ff47a6' },
  { value: 'dragon', label: 'Dragon', selected: false, disabled: false, icon: 'footwear', color: '#0d83ff' },
  { value: 'yung', label: 'YUNG', selected: false, disabled: false, icon: 'footwear', color: '#405fff' },
  { value: 'deerupt', label: 'Deerupt', selected: false, disabled: false, icon: 'footwear', color: '#be7dff' },
  { value: 'kamanda', label: 'kamanda', selected: false, disabled: false, icon: 'footwear', color: '#ebbc33' }
];

export const events = [
  'addItem', 'removeItem', 'highlightItem', 'unhighlightItem',
  'choice', 'change', 'search', 'showDropdown', 'hideDropdown'
];

export function createChoiceTemplate(template, { classNames, itemSelectText }, choices) {
  return (data) => {
    const _data = getChoiceData(data, choices);
    const icon = createIcon(_data.icon, _data.color);

    return template(`
      <div class="${ classNames.item } ${ classNames.itemChoice }
            ${ classNames[_data.disabled ? 'itemDisabled' : 'itemSelectable'] }"
          data-select-text="${ itemSelectText }"
          data-id="${ _data.id }"
          data-value="${ _data.value }"
          data-choice
          data-${ _data.disabled ? 'choice-disabled' : 'choice-selectable' }
          role="${ data.groupId > 0 ? 'treeitem' : 'option' }"
          ${ _data.disabled ? 'aria-disabled="true"' : '' }>
        ${ icon }
        <span>${ _data.label }</span>
      </div>
    `);
  };
}

export function createItemTemplate(template, { classNames, removeItemButton }, choices) {
  return (data) => {
    const _data = getChoiceData(data, choices);
    const icon = createIcon(_data.icon, _data.color);
    const button = createRemoveButton(removeItemButton);

    return template(`
      <div class="${ classNames.item }
            ${ _data.highlighted ? classNames.highlightedState : classNames.itemSelectable }"
          data-item
          data-id="${ _data.id }"
          data-value="${ _data.value }"
          ${ _data.active ? 'aria-selected="true"' : '' }
          ${ _data.disabled ? 'aria-disabled="true"' : '' }>
        ${ icon }
        <span>${ _data.label }</span>
        ${ button }
      </div>
    `);
  };
}

export function getFormValues(form) {
  const _form = new FormData(form);
  const values = [];

  // forEach is not available in all browsers
  if (typeof _form.forEach === 'function') {
    _form.forEach((value, name) => {
      values.push({ name, value });
    });
  } else {
    for (let i = 0, lng = form.length; i < lng; i++) {
      const { name, value } = form[i];

      value && values.push({ name, value });
    }
  }

  return values;
}
