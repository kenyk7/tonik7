const module1 = (function ($) {
  let beforeMount,
    mounted,
    afterMount,
    suscribeEvents,
    event,
    methods,
    middles,
    initialize;

  const dom = {};
  const st = {
    selector: 'hola'
  };

  beforeMount = () => {
    console.log('before mount');
  };
  mounted = () => {
    console.log('mounted', st.selector);
  };
  afterMount = () => {
    console.log('after mount');
  };
  suscribeEvents = () => {
    // register events to selectors
  };

  event = {
    onClick () {
      console.log('on click');
    }
  };
  methods = {
    saveData () {
      console.log('save data');
    }
  };
  // register public methods
  middles = {
    getData (data) {
      console.log(data);
    }
  };

  //función de inicialización del módulo
  initialize = (settings) => {
    Object.assign(st, settings);

    beforeMount();
    mounted();
    afterMount();
    suscribeEvents();
  };
  // funciónes de ejecución pública del módulo
  return {
    // init
    init: initialize,
    // suscribe public methods
    setData: middles.getData
  }
})();

export default module1;
