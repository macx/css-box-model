const wrapper = document.querySelector('#wrapper');
const settings = document.querySelector('#settings');
const settingsBoxSizingRadios = settings.querySelectorAll('#settingsBoxSizing [name="box-sizing"]');
const settingsPropertiesRadios = settings.querySelectorAll('#settingsProperties [name="properties"]');

const boxContent = wrapper.querySelector('#content');
const boxPadding = wrapper.querySelector('#padding');
const boxBorder = wrapper.querySelector('#border');
const boxMargin = wrapper.querySelector('#margin');

const boxWidthValue = settings.querySelector('#boxWidthValue');
const boxHeightValue = settings.querySelector('#boxHeightValue');

settingsBoxSizingRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    wrapper.setAttribute('data-boxsizing', radio.value === 'contentbox' ? 'contentbox' : 'borderbox');
  });
});

settingsPropertiesRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    wrapper.setAttribute('data-property', radio.value === 'logical' ? 'logical' : 'physical');
  });
});

const inputSliders = settings.querySelectorAll('[type="range"]');

const setBoxDimensions = () => {
  console.log('fooobar');
};

inputSliders.forEach((slider) => {
  const displayValue = slider.nextElementSibling;

  slider.addEventListener('change', (e) => {
    displayValue.innerHTML = slider.value;

    setBoxDimensions();

    console.log(slider.name, slider.value);
  });
});
