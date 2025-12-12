/***************** 
 * grd *
 *****************/

import { core, data, sound, util, visual, hardware } from 'https://lib.pavlovia.org/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'grad_new';  // from the Builder filename that created this script
let expInfo = {
    '': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(instruction_highRoutineBegin());
flowScheduler.add(instruction_highRoutineEachFrame());
flowScheduler.add(instruction_highRoutineEnd());
flowScheduler.add(instruction_lowRoutineBegin());
flowScheduler.add(instruction_lowRoutineEachFrame());
flowScheduler.add(instruction_lowRoutineEnd());
flowScheduler.add(instruction_prac1RoutineBegin());
flowScheduler.add(instruction_prac1RoutineEachFrame());
flowScheduler.add(instruction_prac1RoutineEnd());
const practice_loop_titrationLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loop_titrationLoopBegin(practice_loop_titrationLoopScheduler));
flowScheduler.add(practice_loop_titrationLoopScheduler);
flowScheduler.add(practice_loop_titrationLoopEnd);


flowScheduler.add(instruction_main1RoutineBegin());
flowScheduler.add(instruction_main1RoutineEachFrame());
flowScheduler.add(instruction_main1RoutineEnd());
flowScheduler.add(instruction_highRoutineBegin());
flowScheduler.add(instruction_highRoutineEachFrame());
flowScheduler.add(instruction_highRoutineEnd());
flowScheduler.add(instruction_lowRoutineBegin());
flowScheduler.add(instruction_lowRoutineEachFrame());
flowScheduler.add(instruction_lowRoutineEnd());
const outer_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(outer_loopLoopBegin(outer_loopLoopScheduler));
flowScheduler.add(outer_loopLoopScheduler);
flowScheduler.add(outer_loopLoopEnd);





flowScheduler.add(instruction_prac2RoutineBegin());
flowScheduler.add(instruction_prac2RoutineEachFrame());
flowScheduler.add(instruction_prac2RoutineEnd());
const risk_loop_prac2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(risk_loop_prac2LoopBegin(risk_loop_prac2LoopScheduler));
flowScheduler.add(risk_loop_prac2LoopScheduler);
flowScheduler.add(risk_loop_prac2LoopEnd);


flowScheduler.add(instruction_main2RoutineBegin());
flowScheduler.add(instruction_main2RoutineEachFrame());
flowScheduler.add(instruction_main2RoutineEnd());
const risk_loop_main2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(risk_loop_main2LoopBegin(risk_loop_main2LoopScheduler));
flowScheduler.add(risk_loop_main2LoopScheduler);
flowScheduler.add(risk_loop_main2LoopEnd);


flowScheduler.add(demographicsRoutineBegin());
flowScheduler.add(demographicsRoutineEachFrame());
flowScheduler.add(demographicsRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'ご協力ありがとうございました.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'ご協力ありがとうございました.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'practice.xlsx', 'path': 'practice.xlsx'},
    {'name': 'delays.xlsx', 'path': 'delays.xlsx'},
    {'name': 'img_con.jpg', 'path': 'img_con.jpg'},
  ]
});
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var msg_welcome;
var btn_next_welcome;
var mouse_welcome;
var consentClock;
var img_con;
var btn_agree;
var btn_disagree;
var mouse_consent;
var instruction_highClock;
var msg_high;
var btn_next_high;
var mouse_high;
var instruction_lowClock;
var msg_low;
var btn_next_low;
var mouse_low;
var instruction_prac1Clock;
var msg_inst_prac1;
var btn_next_inst_prac1;
var mouse_inst_prac1;
var trial_prac1Clock;
var msg_trial_prac1;
var btn_now_trial_prac1;
var btn_late_trial_prac1;
var mouse_trial_prac1;
var instruction_main1Clock;
var msg_inst_main1;
var btn_next_inst_main1;
var mouse_inst_main1;
var init_varsClock;
var trial_main1Clock;
var msg_trial_main1;
var btn_now_trial_main1;
var btn_late_trial_main1;
var mouse_trial_main1;
var instruction_prac2Clock;
var msg_inst_prac2;
var btn_next_inst_prac2;
var mouse_inst_prac2;
var risk_prac2Clock;
var msg_risk_prac2;
var slider_risk_prac2;
var text_val_prac2;
var btn_next_risk_prac2;
var mouse_risk_prac2;
var instruction_main2Clock;
var msg_inst_main2;
var btn_next_inst_main2;
var mouse_inst_main2;
var risk_main2Clock;
var msg_risk_main2;
var slider_risk_main2;
var text_val_main2;
var btn_next_risk_main2;
var mouse_risk_main2;
var demographicsClock;
var text_demo_age;
var textbox_demo;
var text_demo_gender;
var slider_demo_gender;
var btn_demo_submit;
var mouse_demo_submit;
var thanksClock;
var text_thanks;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  msg_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_welcome',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from randomizer
  // JSで'high'か'low'をランダムに選ぶ
  var groupList = ['high', 'low'];
  var assigned_group = groupList[Math.floor(Math.random() * groupList.length)];
  
  // この値をPsychoPy全体で使えるように保存
  expInfo['group'] = assigned_group;
  
  // データファイルにも 'group' 列として保存
  psychoJS.experiment.addData('group', assigned_group);
  btn_next_welcome = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_welcome',
    text: '次へ',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -2,
     letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_welcome._pixi) {
  btn_next_welcome._pixi.visible = true;
  btn_next_welcome._pixi.clear();
  }
  btn_next_welcome.setAutoDraw(false);
  
  btn_next_welcome.clock = new util.Clock();
  
  mouse_welcome = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_welcome.mouseClock = new util.Clock();
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  img_con = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img_con', units : undefined, 
    image : 'img_con.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.2, 0.675],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  
  btn_agree = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_agree',
    text: '同意する',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -1,
  letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_agree._pixi) {
  btn_agree._pixi.visible = true;
  btn_agree._pixi.clear();
  }
  btn_agree.setAutoDraw(false);
  
  btn_agree.clock = new util.Clock();
  
  btn_disagree = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_disagree',
    text: '同意しない',
    font: 'Arial',
    pos: [(- 0.3), (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_disagree._pixi) {
  btn_disagree._pixi.visible = true;
  btn_disagree._pixi.clear();
  }
  btn_disagree.setAutoDraw(false);
  
  btn_disagree.clock = new util.Clock();
  
  mouse_consent = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_consent.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction_high"
  instruction_highClock = new util.Clock();
  msg_high = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_high',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  btn_next_high = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_high',
    text: '次へ',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_high._pixi) {
  btn_next_high._pixi.visible = true;
  btn_next_high._pixi.clear();
  }
  btn_next_high.setAutoDraw(false);
  
  btn_next_high.clock = new util.Clock();
  
  mouse_high = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_high.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction_low"
  instruction_lowClock = new util.Clock();
  msg_low = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_low',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  btn_next_low = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_low',
    text: '次へ',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_low._pixi) {
  btn_next_low._pixi.visible = true;
  btn_next_low._pixi.clear();
  }
  btn_next_low.setAutoDraw(false);
  
  btn_next_low.clock = new util.Clock();
  
  mouse_low = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_low.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction_prac1"
  instruction_prac1Clock = new util.Clock();
  msg_inst_prac1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_inst_prac1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  btn_next_inst_prac1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_inst_prac1',
    text: '練習へ進む',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_inst_prac1._pixi) {
  btn_next_inst_prac1._pixi.visible = true;
  btn_next_inst_prac1._pixi.clear();
  }
  btn_next_inst_prac1.setAutoDraw(false);
  
  btn_next_inst_prac1.clock = new util.Clock();
  
  mouse_inst_prac1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_inst_prac1.mouseClock = new util.Clock();
  // Initialize components for Routine "trial_prac1"
  trial_prac1Clock = new util.Clock();
  msg_trial_prac1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_trial_prac1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  btn_now_trial_prac1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_now_trial_prac1',
    text: '',
    font: 'Arial',
    pos: [(- 0.3), (- 0.3)],
    size: [0.5, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_now_trial_prac1._pixi) {
  btn_now_trial_prac1._pixi.visible = true;
  btn_now_trial_prac1._pixi.clear();
  }
  btn_now_trial_prac1.setAutoDraw(false);
  
  btn_now_trial_prac1.clock = new util.Clock();
  
  btn_late_trial_prac1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_late_trial_prac1',
    text: '',
    font: 'Arial',
    pos: [0.3, (- 0.3)],
    size: [0.5, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: 'black',
    colorSpace: 'rgb',
    borderWidth: 0.005,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_late_trial_prac1._pixi) {
  btn_late_trial_prac1._pixi.visible = true;
  btn_late_trial_prac1._pixi.clear();
  }
  btn_late_trial_prac1.setAutoDraw(false);
  
  btn_late_trial_prac1.clock = new util.Clock();
  
  mouse_trial_prac1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_trial_prac1.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction_main1"
  instruction_main1Clock = new util.Clock();
  msg_inst_main1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_inst_main1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  btn_next_inst_main1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_inst_main1',
    text: '次へ',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_inst_main1._pixi) {
  btn_next_inst_main1._pixi.visible = true;
  btn_next_inst_main1._pixi.clear();
  }
  btn_next_inst_main1.setAutoDraw(false);
  
  btn_next_inst_main1.clock = new util.Clock();
  
  mouse_inst_main1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_inst_main1.mouseClock = new util.Clock();
  // Initialize components for Routine "init_vars"
  init_varsClock = new util.Clock();
  // Initialize components for Routine "trial_main1"
  trial_main1Clock = new util.Clock();
  msg_trial_main1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_trial_main1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  btn_now_trial_main1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_now_trial_main1',
    text: '',
    font: 'Arial',
    pos: [(- 0.3), (- 0.3)],
    size: [0.5, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_now_trial_main1._pixi) {
  btn_now_trial_main1._pixi.visible = true;
  btn_now_trial_main1._pixi.clear();
  }
  btn_now_trial_main1.setAutoDraw(false);
  
  btn_now_trial_main1.clock = new util.Clock();
  
  btn_late_trial_main1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_late_trial_main1',
    text: '',
    font: 'Arial',
    pos: [0.3, (- 0.3)],
    size: [0.5, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_late_trial_main1._pixi) {
  btn_late_trial_main1._pixi.visible = true;
  btn_late_trial_main1._pixi.clear();
  }
  btn_late_trial_main1.setAutoDraw(false);
  
  btn_late_trial_main1.clock = new util.Clock();
  
  mouse_trial_main1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_trial_main1.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction_prac2"
  instruction_prac2Clock = new util.Clock();
  msg_inst_prac2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_inst_prac2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  btn_next_inst_prac2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_inst_prac2',
    text: '練習へ進む',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_inst_prac2._pixi) {
  btn_next_inst_prac2._pixi.visible = true;
  btn_next_inst_prac2._pixi.clear();
  }
  btn_next_inst_prac2.setAutoDraw(false);
  
  btn_next_inst_prac2.clock = new util.Clock();
  
  mouse_inst_prac2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_inst_prac2.mouseClock = new util.Clock();
  // Initialize components for Routine "risk_prac2"
  risk_prac2Clock = new util.Clock();
  msg_risk_prac2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_risk_prac2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_risk_prac2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_risk_prac2',
    startValue: 50,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "100%"], fontSize: 0.05, ticks: [0, 100],
    granularity: 1.0, style: ["SLIDER"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_val_prac2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_val_prac2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  btn_next_risk_prac2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_risk_prac2',
    text: '次へ進む',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_risk_prac2._pixi) {
  btn_next_risk_prac2._pixi.visible = true;
  btn_next_risk_prac2._pixi.clear();
  }
  btn_next_risk_prac2.setAutoDraw(false);
  
  btn_next_risk_prac2.clock = new util.Clock();
  
  mouse_risk_prac2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_risk_prac2.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction_main2"
  instruction_main2Clock = new util.Clock();
  msg_inst_main2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_inst_main2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  btn_next_inst_main2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_inst_main2',
    text: '次へ',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_inst_main2._pixi) {
  btn_next_inst_main2._pixi.visible = true;
  btn_next_inst_main2._pixi.clear();
  }
  btn_next_inst_main2.setAutoDraw(false);
  
  btn_next_inst_main2.clock = new util.Clock();
  
  mouse_inst_main2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_inst_main2.mouseClock = new util.Clock();
  // Initialize components for Routine "risk_main2"
  risk_main2Clock = new util.Clock();
  msg_risk_main2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_risk_main2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_risk_main2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_risk_main2',
    startValue: 50,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["0%", "100%"], fontSize: 0.05, ticks: [0, 100],
    granularity: 1.0, style: ["SLIDER"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_val_main2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_val_main2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  btn_next_risk_main2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_next_risk_main2',
    text: '次へ進む',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.4, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_next_risk_main2._pixi) {
  btn_next_risk_main2._pixi.visible = true;
  btn_next_risk_main2._pixi.clear();
  }
  btn_next_risk_main2.setAutoDraw(false);
  
  btn_next_risk_main2.clock = new util.Clock();
  
  mouse_risk_main2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_risk_main2.mouseClock = new util.Clock();
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  text_demo_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_demo_age',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  
  text_demo_gender = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_demo_gender',
    text: '',
    font: 'Meiryo',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  
  btn_demo_submit = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'btn_demo_submit',
    text: '決定して終了する',
    font: 'Arial',
    pos: [0.3, (- 0.4)],
    size: [0.6, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
     units: psychoJS.window.units,
     color: 'black',
     fillColor: 'white',
     borderColor: 'black',
     colorSpace: 'rgb',
     borderWidth: 0.005,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: false,
    italic: false,
  });
  
  if (btn_demo_submit._pixi) {
  btn_demo_submit._pixi.visible = true;
  btn_demo_submit._pixi.clear();
  }
  btn_demo_submit.setAutoDraw(false);
  
  btn_demo_submit.clock = new util.Clock();
  
  mouse_demo_submit = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_demo_submit.mouseClock = new util.Clock();
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text_thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_thanks',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  
  

  // Create some handy timers
  globalClock = new util.Clock();
  routineTimer = new util.CountdownTimer();

  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomeMaxDurationReached;
var gotValidClick;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_next_welcome to account for continued clicks & clear times on/off
    btn_next_welcome.reset()
    // setup some python lists for storing info about the mouse_welcome
    // current position of the mouse:
    mouse_welcome.x = [];
    mouse_welcome.y = [];
    mouse_welcome.leftButton = [];
    mouse_welcome.midButton = [];
    mouse_welcome.rightButton = [];
    mouse_welcome.time = [];
    mouse_welcome.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(msg_welcome);
    welcomeComponents.push(btn_next_welcome);
    welcomeComponents.push(mouse_welcome);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_welcome* updates
    if (t >= 0.0 && msg_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_welcome.setText('この実験は10分程度で終了します。\n\n【重要】 この実験は PC（パソコン）専用 です。\n\nスマートフォンやタブレットでは正しく動作しません。\nPCでアクセスしていることを確認し、 \n準備ができたら「次へ」ボタンをクリックして始めてください。\n', false);
      // keep track of start time/frame for later
      msg_welcome.tStart = t;  // (not accounting for frame time here)
      msg_welcome.frameNStart = frameN;  // exact frame index
      
      msg_welcome.setAutoDraw(true);
    }
    
    
    // if msg_welcome is active this frame...
    if (msg_welcome.status === PsychoJS.Status.STARTED) {
      // update params
      msg_welcome.setText('この実験は10分程度で終了します。\n\n【重要】 この実験は PC（パソコン）専用 です。\n\nスマートフォンやタブレットでは正しく動作しません。\nPCでアクセスしていることを確認し、 \n準備ができたら「次へ」ボタンをクリックして始めてください。\n', false);
    }
    
    
    // *btn_next_welcome* updates
    if (t >= 0 && btn_next_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_welcome.tStart = t;  // (not accounting for frame time here)
      btn_next_welcome.frameNStart = frameN;  // exact frame index
      
      btn_next_welcome.setAutoDraw(true);
    }
    
    
    // if btn_next_welcome is active this frame...
    if (btn_next_welcome.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_welcome.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_welcome has been pressed
      if (btn_next_welcome.isClicked) {
        if (!btn_next_welcome.wasClicked) {
          // store time of first click
          btn_next_welcome.timesOn.push(btn_next_welcome.clock.getTime());
          // store time clicked until
          btn_next_welcome.timesOff.push(btn_next_welcome.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_welcome.timesOff[btn_next_welcome.timesOff.length - 1] = btn_next_welcome.clock.getTime();
        }
        if (!btn_next_welcome.wasClicked) {
          
        }
        // if btn_next_welcome is still clicked next frame, it is not a new click
        btn_next_welcome.wasClicked = true;
      } else {
        // if btn_next_welcome is clicked next frame, it is a new click
        btn_next_welcome.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_welcome hasn't started / has finished
      btn_next_welcome.clock.reset();
      // if btn_next_welcome is clicked next frame, it is a new click
      btn_next_welcome.wasClicked = false;
    }
    // *mouse_welcome* updates
    if (t >= 0.0 && mouse_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_welcome.tStart = t;  // (not accounting for frame time here)
      mouse_welcome.frameNStart = frameN;  // exact frame index
      
      mouse_welcome.status = PsychoJS.Status.STARTED;
      mouse_welcome.mouseClock.reset();
      prevButtonState = mouse_welcome.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_welcome is active this frame...
    if (mouse_welcome.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_welcome.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_welcome.clickableObjects = btn_next_welcome
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_welcome.clickableObjects)) {
              mouse_welcome.clickableObjects = [mouse_welcome.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_welcome.clickableObjects) {
              if (obj.contains(mouse_welcome)) {
                  gotValidClick = true;
                  mouse_welcome.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_welcome.clicked_name.push(null);
          }
          _mouseXYs = mouse_welcome.getPos();
          mouse_welcome.x.push(_mouseXYs[0]);
          mouse_welcome.y.push(_mouseXYs[1]);
          mouse_welcome.leftButton.push(_mouseButtons[0]);
          mouse_welcome.midButton.push(_mouseButtons[1]);
          mouse_welcome.rightButton.push(_mouseButtons[2]);
          mouse_welcome.time.push(mouse_welcome.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_next_welcome.numClicks', btn_next_welcome.numClicks);
    psychoJS.experiment.addData('btn_next_welcome.timesOn', btn_next_welcome.timesOn);
    psychoJS.experiment.addData('btn_next_welcome.timesOff', btn_next_welcome.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_welcome.x', mouse_welcome.x);
    psychoJS.experiment.addData('mouse_welcome.y', mouse_welcome.y);
    psychoJS.experiment.addData('mouse_welcome.leftButton', mouse_welcome.leftButton);
    psychoJS.experiment.addData('mouse_welcome.midButton', mouse_welcome.midButton);
    psychoJS.experiment.addData('mouse_welcome.rightButton', mouse_welcome.rightButton);
    psychoJS.experiment.addData('mouse_welcome.time', mouse_welcome.time);
    psychoJS.experiment.addData('mouse_welcome.clicked_name', mouse_welcome.clicked_name);
    
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consentMaxDurationReached;
var consentMaxDuration;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    consentClock.reset();
    routineTimer.reset();
    consentMaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_agree to account for continued clicks & clear times on/off
    btn_agree.reset()
    // reset btn_disagree to account for continued clicks & clear times on/off
    btn_disagree.reset()
    // setup some python lists for storing info about the mouse_consent
    // current position of the mouse:
    mouse_consent.x = [];
    mouse_consent.y = [];
    mouse_consent.leftButton = [];
    mouse_consent.midButton = [];
    mouse_consent.rightButton = [];
    mouse_consent.time = [];
    mouse_consent.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('consent.started', globalClock.getTime());
    consentMaxDuration = null
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(img_con);
    consentComponents.push(btn_agree);
    consentComponents.push(btn_disagree);
    consentComponents.push(mouse_consent);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
        // --- リンクボタンの追加 ---
    // もし既にボタンがあったら消す（重複防止）
    let oldLink = document.getElementById('consent_link_btn');
    if (oldLink) oldLink.remove();

    // 新しいリンクボタンを作る
    let linkBtn = document.createElement('a');
    linkBtn.id = 'consent_link_btn';
    
    // ★★★ ここにGoogleドライブのURLを貼ってください ★★★
    linkBtn.href = "https://drive.google.com/file/d/1dvrWl7MM4KYnguqeouF5OzEOpoIa3QQX/view?usp=sharing"; 
    
    linkBtn.target = "_blank"; // 別タブで開く
    linkBtn.innerText = "同意書が読みにくい場合はこちらをクリック（別画像が開きます）";
    
    // デザイン（見た目）の設定
    linkBtn.style.position = "absolute";
    linkBtn.style.top = "10%";       // 上からの位置
    linkBtn.style.left = "50%";      // 左からの位置
    linkBtn.style.transform = "translate(-50%, 0)"; // 真ん中に合わせる
    linkBtn.style.padding = "10px 20px";
    linkBtn.style.backgroundColor = "#4CAF50"; // 緑色
    linkBtn.style.color = "white";
    linkBtn.style.fontSize = "18px";
    linkBtn.style.borderRadius = "5px";
    linkBtn.style.textDecoration = "none";
    linkBtn.style.zIndex = "1000";   // 最前面に表示
    linkBtn.style.cursor = "pointer";

    document.body.appendChild(linkBtn);
    // ---------------------------
return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *img_con* updates
    if (t >= 0.0 && img_con.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img_con.tStart = t;  // (not accounting for frame time here)
      img_con.frameNStart = frameN;  // exact frame index
      
      img_con.setAutoDraw(true);
    }
    
    
    // if img_con is active this frame...
    if (img_con.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_agree* updates
    if (t >= 0 && btn_agree.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_agree.tStart = t;  // (not accounting for frame time here)
      btn_agree.frameNStart = frameN;  // exact frame index
      
      btn_agree.setAutoDraw(true);
    }
    
    
    // if btn_agree is active this frame...
    if (btn_agree.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_agree.status === PsychoJS.Status.STARTED) {
      // check whether btn_agree has been pressed
      if (btn_agree.isClicked) {
        if (!btn_agree.wasClicked) {
          // store time of first click
          btn_agree.timesOn.push(btn_agree.clock.getTime());
          // store time clicked until
          btn_agree.timesOff.push(btn_agree.clock.getTime());
        } else {
          // update time clicked until;
          btn_agree.timesOff[btn_agree.timesOff.length - 1] = btn_agree.clock.getTime();
        }
        if (!btn_agree.wasClicked) {
          
        }
        // if btn_agree is still clicked next frame, it is not a new click
        btn_agree.wasClicked = true;
      } else {
        // if btn_agree is clicked next frame, it is a new click
        btn_agree.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_agree hasn't started / has finished
      btn_agree.clock.reset();
      // if btn_agree is clicked next frame, it is a new click
      btn_agree.wasClicked = false;
    }
    
    // *btn_disagree* updates
    if (t >= 0 && btn_disagree.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_disagree.tStart = t;  // (not accounting for frame time here)
      btn_disagree.frameNStart = frameN;  // exact frame index
      
      btn_disagree.setAutoDraw(true);
    }
    
    
    // if btn_disagree is active this frame...
    if (btn_disagree.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_disagree.status === PsychoJS.Status.STARTED) {
      // check whether btn_disagree has been pressed
      if (btn_disagree.isClicked) {
        if (!btn_disagree.wasClicked) {
          // store time of first click
          btn_disagree.timesOn.push(btn_disagree.clock.getTime());
          // store time clicked until
          btn_disagree.timesOff.push(btn_disagree.clock.getTime());
        } else {
          // update time clicked until;
          btn_disagree.timesOff[btn_disagree.timesOff.length - 1] = btn_disagree.clock.getTime();
        }
        if (!btn_disagree.wasClicked) {
          
        }
        // if btn_disagree is still clicked next frame, it is not a new click
        btn_disagree.wasClicked = true;
      } else {
        // if btn_disagree is clicked next frame, it is a new click
        btn_disagree.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_disagree hasn't started / has finished
      btn_disagree.clock.reset();
      // if btn_disagree is clicked next frame, it is a new click
      btn_disagree.wasClicked = false;
    }
    // *mouse_consent* updates
    if (t >= 0.0 && mouse_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_consent.tStart = t;  // (not accounting for frame time here)
      mouse_consent.frameNStart = frameN;  // exact frame index
      
      mouse_consent.status = PsychoJS.Status.STARTED;
      mouse_consent.mouseClock.reset();
      prevButtonState = mouse_consent.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_consent is active this frame...
    if (mouse_consent.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_consent.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_consent.clickableObjects = [btn_agree, btn_disagree]
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_consent.clickableObjects)) {
              mouse_consent.clickableObjects = [mouse_consent.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_consent.clickableObjects) {
              if (obj.contains(mouse_consent)) {
                  gotValidClick = true;
                  mouse_consent.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_consent.clicked_name.push(null);
          }
          _mouseXYs = mouse_consent.getPos();
          mouse_consent.x.push(_mouseXYs[0]);
          mouse_consent.y.push(_mouseXYs[1]);
          mouse_consent.leftButton.push(_mouseButtons[0]);
          mouse_consent.midButton.push(_mouseButtons[1]);
          mouse_consent.rightButton.push(_mouseButtons[2]);
          mouse_consent.time.push(mouse_consent.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
// --- リンクボタンの削除 ---
    let linkBtn = document.getElementById('consent_link_btn');
    if (linkBtn) {
        linkBtn.remove();
    }
    // -----------------------
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_agree.numClicks', btn_agree.numClicks);
    psychoJS.experiment.addData('btn_agree.timesOn', btn_agree.timesOn);
    psychoJS.experiment.addData('btn_agree.timesOff', btn_agree.timesOff);
    psychoJS.experiment.addData('btn_disagree.numClicks', btn_disagree.numClicks);
    psychoJS.experiment.addData('btn_disagree.timesOn', btn_disagree.timesOn);
    psychoJS.experiment.addData('btn_disagree.timesOff', btn_disagree.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_consent.x', mouse_consent.x);
    psychoJS.experiment.addData('mouse_consent.y', mouse_consent.y);
    psychoJS.experiment.addData('mouse_consent.leftButton', mouse_consent.leftButton);
    psychoJS.experiment.addData('mouse_consent.midButton', mouse_consent.midButton);
    psychoJS.experiment.addData('mouse_consent.rightButton', mouse_consent.rightButton);
    psychoJS.experiment.addData('mouse_consent.time', mouse_consent.time);
    psychoJS.experiment.addData('mouse_consent.clicked_name', mouse_consent.clicked_name);
    
    // Run 'End Routine' code from code_consent
    // 'mouse_consent' が 'btn_disagree' をクリックしたかチェック
    if (mouse_consent.isPressedIn(btn_disagree)) {
        // '同意しない' がクリックされた場合
        psychoJS.experiment.addData('consent_status', 'disagreed'); // 'disagreed' と記録
        psychoJS.quit(); // 実験を終了
    } else {
        // '同意する' がクリックされた場合
        psychoJS.experiment.addData('consent_status', 'agreed');
    }
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_highMaxDurationReached;
var instruction_highMaxDuration;
var instruction_highComponents;
function instruction_highRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_high' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_highClock.reset();
    routineTimer.reset();
    instruction_highMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from branch_high
    // 'welcome'ルーチンで設定した 'group' を確認
    // もし 'group' が 'high' で「なかったら」...
    if (expInfo['group'] != 'high') {
        // ...このルーチンをスキップする
        continueRoutine = false;
    }
    // reset btn_next_high to account for continued clicks & clear times on/off
    btn_next_high.reset()
    // setup some python lists for storing info about the mouse_high
    // current position of the mouse:
    mouse_high.x = [];
    mouse_high.y = [];
    mouse_high.leftButton = [];
    mouse_high.midButton = [];
    mouse_high.rightButton = [];
    mouse_high.time = [];
    mouse_high.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instruction_high.started', globalClock.getTime());
    instruction_highMaxDuration = null
    // keep track of which components have finished
    instruction_highComponents = [];
    instruction_highComponents.push(msg_high);
    instruction_highComponents.push(btn_next_high);
    instruction_highComponents.push(mouse_high);
    
    for (const thisComponent of instruction_highComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_highRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_high' ---
    // get current time
    t = instruction_highClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_high* updates
    if (t >= 0.0 && msg_high.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_high.setText('【場面を想像してください】\nあなたは、大学の図書館から借りた専門書を返却し忘れ、\n1,000円の延滞金を支払わなければならなくなりました。\n\n【支払い方法について】 \nもしあなたが「後で支払う」方を選択した場合、 \n期日に担当の係員が伝票を処理し、あなたに請求を行います。\n\n読み終わったら、「次へ」を押してください。', false);
      // keep track of start time/frame for later
      msg_high.tStart = t;  // (not accounting for frame time here)
      msg_high.frameNStart = frameN;  // exact frame index
      
      msg_high.setAutoDraw(true);
    }
    
    
    // if msg_high is active this frame...
    if (msg_high.status === PsychoJS.Status.STARTED) {
      // update params
      msg_high.setText('【場面を想像してください】\nあなたは、大学の図書館から借りた専門書を返却し忘れ、\n1,000円の延滞金を支払わなければならなくなりました。\n\n【支払い方法について】 \nもしあなたが「後で支払う」方を選択した場合、 \n期日に担当の係員が伝票を処理し、あなたに請求を行います。\n\n読み終わったら、「次へ」を押してください。', false);
    }
    
    
    // *btn_next_high* updates
    if (t >= 0 && btn_next_high.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_high.tStart = t;  // (not accounting for frame time here)
      btn_next_high.frameNStart = frameN;  // exact frame index
      
      btn_next_high.setAutoDraw(true);
    }
    
    
    // if btn_next_high is active this frame...
    if (btn_next_high.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_high.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_high has been pressed
      if (btn_next_high.isClicked) {
        if (!btn_next_high.wasClicked) {
          // store time of first click
          btn_next_high.timesOn.push(btn_next_high.clock.getTime());
          // store time clicked until
          btn_next_high.timesOff.push(btn_next_high.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_high.timesOff[btn_next_high.timesOff.length - 1] = btn_next_high.clock.getTime();
        }
        if (!btn_next_high.wasClicked) {
          
        }
        // if btn_next_high is still clicked next frame, it is not a new click
        btn_next_high.wasClicked = true;
      } else {
        // if btn_next_high is clicked next frame, it is a new click
        btn_next_high.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_high hasn't started / has finished
      btn_next_high.clock.reset();
      // if btn_next_high is clicked next frame, it is a new click
      btn_next_high.wasClicked = false;
    }
    // *mouse_high* updates
    if (t >= 0.0 && mouse_high.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_high.tStart = t;  // (not accounting for frame time here)
      mouse_high.frameNStart = frameN;  // exact frame index
      
      mouse_high.status = PsychoJS.Status.STARTED;
      mouse_high.mouseClock.reset();
      prevButtonState = mouse_high.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_high is active this frame...
    if (mouse_high.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_high.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_high.clickableObjects = btn_next_high
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_high.clickableObjects)) {
              mouse_high.clickableObjects = [mouse_high.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_high.clickableObjects) {
              if (obj.contains(mouse_high)) {
                  gotValidClick = true;
                  mouse_high.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_high.clicked_name.push(null);
          }
          _mouseXYs = mouse_high.getPos();
          mouse_high.x.push(_mouseXYs[0]);
          mouse_high.y.push(_mouseXYs[1]);
          mouse_high.leftButton.push(_mouseButtons[0]);
          mouse_high.midButton.push(_mouseButtons[1]);
          mouse_high.rightButton.push(_mouseButtons[2]);
          mouse_high.time.push(mouse_high.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_highComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_highRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_high' ---
    for (const thisComponent of instruction_highComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_high.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_next_high.numClicks', btn_next_high.numClicks);
    psychoJS.experiment.addData('btn_next_high.timesOn', btn_next_high.timesOn);
    psychoJS.experiment.addData('btn_next_high.timesOff', btn_next_high.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_high.x', mouse_high.x);
    psychoJS.experiment.addData('mouse_high.y', mouse_high.y);
    psychoJS.experiment.addData('mouse_high.leftButton', mouse_high.leftButton);
    psychoJS.experiment.addData('mouse_high.midButton', mouse_high.midButton);
    psychoJS.experiment.addData('mouse_high.rightButton', mouse_high.rightButton);
    psychoJS.experiment.addData('mouse_high.time', mouse_high.time);
    psychoJS.experiment.addData('mouse_high.clicked_name', mouse_high.clicked_name);
    
    // the Routine "instruction_high" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_lowMaxDurationReached;
var instruction_lowMaxDuration;
var instruction_lowComponents;
function instruction_lowRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_low' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_lowClock.reset();
    routineTimer.reset();
    instruction_lowMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from branch_low
    // 'welcome'ルーチンで設定した 'group' を確認
    // もし 'group' が 'low' で「なかったら」...
    if (expInfo['group'] != 'low') {
        // ...このルーチンをスキップする
        continueRoutine = false;
    }
    // reset btn_next_low to account for continued clicks & clear times on/off
    btn_next_low.reset()
    // setup some python lists for storing info about the mouse_low
    // current position of the mouse:
    mouse_low.x = [];
    mouse_low.y = [];
    mouse_low.leftButton = [];
    mouse_low.midButton = [];
    mouse_low.rightButton = [];
    mouse_low.time = [];
    mouse_low.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instruction_low.started', globalClock.getTime());
    instruction_lowMaxDuration = null
    // keep track of which components have finished
    instruction_lowComponents = [];
    instruction_lowComponents.push(msg_low);
    instruction_lowComponents.push(btn_next_low);
    instruction_lowComponents.push(mouse_low);
    
    for (const thisComponent of instruction_lowComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_lowRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_low' ---
    // get current time
    t = instruction_lowClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_low* updates
    if (t >= 0.0 && msg_low.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_low.setText('【場面を想像してください】\nあなたは、大学の図書館から借りた専門書を返却し忘れ、\n1,000円の延滞金を支払わなければならなくなりました。\n\n【支払い方法について】 \nもしあなたが「後で支払う」方を選択した場合、\n大学の管理システムにより、\nあなたの学生口座から自動的に引き落とされます。\n\n読み終わったら、「次へ」を押してください。', false);
      // keep track of start time/frame for later
      msg_low.tStart = t;  // (not accounting for frame time here)
      msg_low.frameNStart = frameN;  // exact frame index
      
      msg_low.setAutoDraw(true);
    }
    
    
    // if msg_low is active this frame...
    if (msg_low.status === PsychoJS.Status.STARTED) {
      // update params
      msg_low.setText('【場面を想像してください】\nあなたは、大学の図書館から借りた専門書を返却し忘れ、\n1,000円の延滞金を支払わなければならなくなりました。\n\n【支払い方法について】 \nもしあなたが「後で支払う」方を選択した場合、\n大学の管理システムにより、\nあなたの学生口座から自動的に引き落とされます。\n\n読み終わったら、「次へ」を押してください。', false);
    }
    
    
    // *btn_next_low* updates
    if (t >= 0 && btn_next_low.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_low.tStart = t;  // (not accounting for frame time here)
      btn_next_low.frameNStart = frameN;  // exact frame index
      
      btn_next_low.setAutoDraw(true);
    }
    
    
    // if btn_next_low is active this frame...
    if (btn_next_low.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_low.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_low has been pressed
      if (btn_next_low.isClicked) {
        if (!btn_next_low.wasClicked) {
          // store time of first click
          btn_next_low.timesOn.push(btn_next_low.clock.getTime());
          // store time clicked until
          btn_next_low.timesOff.push(btn_next_low.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_low.timesOff[btn_next_low.timesOff.length - 1] = btn_next_low.clock.getTime();
        }
        if (!btn_next_low.wasClicked) {
          
        }
        // if btn_next_low is still clicked next frame, it is not a new click
        btn_next_low.wasClicked = true;
      } else {
        // if btn_next_low is clicked next frame, it is a new click
        btn_next_low.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_low hasn't started / has finished
      btn_next_low.clock.reset();
      // if btn_next_low is clicked next frame, it is a new click
      btn_next_low.wasClicked = false;
    }
    // *mouse_low* updates
    if (t >= 0.0 && mouse_low.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_low.tStart = t;  // (not accounting for frame time here)
      mouse_low.frameNStart = frameN;  // exact frame index
      
      mouse_low.status = PsychoJS.Status.STARTED;
      mouse_low.mouseClock.reset();
      prevButtonState = mouse_low.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_low is active this frame...
    if (mouse_low.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_low.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_low.clickableObjects = btn_next_low
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_low.clickableObjects)) {
              mouse_low.clickableObjects = [mouse_low.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_low.clickableObjects) {
              if (obj.contains(mouse_low)) {
                  gotValidClick = true;
                  mouse_low.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_low.clicked_name.push(null);
          }
          _mouseXYs = mouse_low.getPos();
          mouse_low.x.push(_mouseXYs[0]);
          mouse_low.y.push(_mouseXYs[1]);
          mouse_low.leftButton.push(_mouseButtons[0]);
          mouse_low.midButton.push(_mouseButtons[1]);
          mouse_low.rightButton.push(_mouseButtons[2]);
          mouse_low.time.push(mouse_low.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_lowComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_lowRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_low' ---
    for (const thisComponent of instruction_lowComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_low.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_next_low.numClicks', btn_next_low.numClicks);
    psychoJS.experiment.addData('btn_next_low.timesOn', btn_next_low.timesOn);
    psychoJS.experiment.addData('btn_next_low.timesOff', btn_next_low.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_low.x', mouse_low.x);
    psychoJS.experiment.addData('mouse_low.y', mouse_low.y);
    psychoJS.experiment.addData('mouse_low.leftButton', mouse_low.leftButton);
    psychoJS.experiment.addData('mouse_low.midButton', mouse_low.midButton);
    psychoJS.experiment.addData('mouse_low.rightButton', mouse_low.rightButton);
    psychoJS.experiment.addData('mouse_low.time', mouse_low.time);
    psychoJS.experiment.addData('mouse_low.clicked_name', mouse_low.clicked_name);
    
    // the Routine "instruction_low" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_prac1MaxDurationReached;
var instruction_prac1MaxDuration;
var instruction_prac1Components;
function instruction_prac1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_prac1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_prac1Clock.reset();
    routineTimer.reset();
    instruction_prac1MaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_next_inst_prac1 to account for continued clicks & clear times on/off
    btn_next_inst_prac1.reset()
    // setup some python lists for storing info about the mouse_inst_prac1
    // current position of the mouse:
    mouse_inst_prac1.x = [];
    mouse_inst_prac1.y = [];
    mouse_inst_prac1.leftButton = [];
    mouse_inst_prac1.midButton = [];
    mouse_inst_prac1.rightButton = [];
    mouse_inst_prac1.time = [];
    mouse_inst_prac1.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instruction_prac1.started', globalClock.getTime());
    instruction_prac1MaxDuration = null
    // keep track of which components have finished
    instruction_prac1Components = [];
    instruction_prac1Components.push(msg_inst_prac1);
    instruction_prac1Components.push(btn_next_inst_prac1);
    instruction_prac1Components.push(mouse_inst_prac1);
    
    for (const thisComponent of instruction_prac1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_prac1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_prac1' ---
    // get current time
    t = instruction_prac1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_inst_prac1* updates
    if (t >= 0.0 && msg_inst_prac1.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_inst_prac1.setText('まず、操作に慣れてもらうため、\n選択課題の練習を数回行います。\n\n選びたい方をクリックしてください。\n\nこれは練習なので、\n実験結果には影響しません。\n\n「練習へ進む」を押してください。', false);
      // keep track of start time/frame for later
      msg_inst_prac1.tStart = t;  // (not accounting for frame time here)
      msg_inst_prac1.frameNStart = frameN;  // exact frame index
      
      msg_inst_prac1.setAutoDraw(true);
    }
    
    
    // if msg_inst_prac1 is active this frame...
    if (msg_inst_prac1.status === PsychoJS.Status.STARTED) {
      // update params
      msg_inst_prac1.setText('まず、操作に慣れてもらうため、\n選択課題の練習を数回行います。\n\n選びたい方をクリックしてください。\n\nこれは練習なので、\n実験結果には影響しません。\n\n「練習へ進む」を押してください。', false);
    }
    
    
    // *btn_next_inst_prac1* updates
    if (t >= 0 && btn_next_inst_prac1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_inst_prac1.tStart = t;  // (not accounting for frame time here)
      btn_next_inst_prac1.frameNStart = frameN;  // exact frame index
      
      btn_next_inst_prac1.setAutoDraw(true);
    }
    
    
    // if btn_next_inst_prac1 is active this frame...
    if (btn_next_inst_prac1.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_inst_prac1.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_inst_prac1 has been pressed
      if (btn_next_inst_prac1.isClicked) {
        if (!btn_next_inst_prac1.wasClicked) {
          // store time of first click
          btn_next_inst_prac1.timesOn.push(btn_next_inst_prac1.clock.getTime());
          // store time clicked until
          btn_next_inst_prac1.timesOff.push(btn_next_inst_prac1.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_inst_prac1.timesOff[btn_next_inst_prac1.timesOff.length - 1] = btn_next_inst_prac1.clock.getTime();
        }
        if (!btn_next_inst_prac1.wasClicked) {
          
        }
        // if btn_next_inst_prac1 is still clicked next frame, it is not a new click
        btn_next_inst_prac1.wasClicked = true;
      } else {
        // if btn_next_inst_prac1 is clicked next frame, it is a new click
        btn_next_inst_prac1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_inst_prac1 hasn't started / has finished
      btn_next_inst_prac1.clock.reset();
      // if btn_next_inst_prac1 is clicked next frame, it is a new click
      btn_next_inst_prac1.wasClicked = false;
    }
    // *mouse_inst_prac1* updates
    if (t >= 0.0 && mouse_inst_prac1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_inst_prac1.tStart = t;  // (not accounting for frame time here)
      mouse_inst_prac1.frameNStart = frameN;  // exact frame index
      
      mouse_inst_prac1.status = PsychoJS.Status.STARTED;
      mouse_inst_prac1.mouseClock.reset();
      prevButtonState = mouse_inst_prac1.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_inst_prac1 is active this frame...
    if (mouse_inst_prac1.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_inst_prac1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_inst_prac1.clickableObjects = btn_next_inst_prac1
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_inst_prac1.clickableObjects)) {
              mouse_inst_prac1.clickableObjects = [mouse_inst_prac1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_inst_prac1.clickableObjects) {
              if (obj.contains(mouse_inst_prac1)) {
                  gotValidClick = true;
                  mouse_inst_prac1.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_inst_prac1.clicked_name.push(null);
          }
          _mouseXYs = mouse_inst_prac1.getPos();
          mouse_inst_prac1.x.push(_mouseXYs[0]);
          mouse_inst_prac1.y.push(_mouseXYs[1]);
          mouse_inst_prac1.leftButton.push(_mouseButtons[0]);
          mouse_inst_prac1.midButton.push(_mouseButtons[1]);
          mouse_inst_prac1.rightButton.push(_mouseButtons[2]);
          mouse_inst_prac1.time.push(mouse_inst_prac1.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_prac1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_prac1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_prac1' ---
    for (const thisComponent of instruction_prac1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_prac1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_next_inst_prac1.numClicks', btn_next_inst_prac1.numClicks);
    psychoJS.experiment.addData('btn_next_inst_prac1.timesOn', btn_next_inst_prac1.timesOn);
    psychoJS.experiment.addData('btn_next_inst_prac1.timesOff', btn_next_inst_prac1.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_inst_prac1.x', mouse_inst_prac1.x);
    psychoJS.experiment.addData('mouse_inst_prac1.y', mouse_inst_prac1.y);
    psychoJS.experiment.addData('mouse_inst_prac1.leftButton', mouse_inst_prac1.leftButton);
    psychoJS.experiment.addData('mouse_inst_prac1.midButton', mouse_inst_prac1.midButton);
    psychoJS.experiment.addData('mouse_inst_prac1.rightButton', mouse_inst_prac1.rightButton);
    psychoJS.experiment.addData('mouse_inst_prac1.time', mouse_inst_prac1.time);
    psychoJS.experiment.addData('mouse_inst_prac1.clicked_name', mouse_inst_prac1.clicked_name);
    
    // the Routine "instruction_prac1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_loop_titration;
function practice_loop_titrationLoopBegin(practice_loop_titrationLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop_titration = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'practice_loop_titration'
    });
    psychoJS.experiment.addLoop(practice_loop_titration); // add the loop to the experiment
    currentLoop = practice_loop_titration;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_loop_titration of practice_loop_titration) {
      snapshot = practice_loop_titration.getSnapshot();
      practice_loop_titrationLoopScheduler.add(importConditions(snapshot));
      practice_loop_titrationLoopScheduler.add(trial_prac1RoutineBegin(snapshot));
      practice_loop_titrationLoopScheduler.add(trial_prac1RoutineEachFrame());
      practice_loop_titrationLoopScheduler.add(trial_prac1RoutineEnd(snapshot));
      practice_loop_titrationLoopScheduler.add(practice_loop_titrationLoopEndIteration(practice_loop_titrationLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_loop_titrationLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_loop_titration);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_loop_titrationLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var outer_loop;
function outer_loopLoopBegin(outer_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    outer_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'delays.xlsx',
      seed: undefined, name: 'outer_loop'
    });
    psychoJS.experiment.addLoop(outer_loop); // add the loop to the experiment
    currentLoop = outer_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisOuter_loop of outer_loop) {
      snapshot = outer_loop.getSnapshot();
      outer_loopLoopScheduler.add(importConditions(snapshot));
      outer_loopLoopScheduler.add(init_varsRoutineBegin(snapshot));
      outer_loopLoopScheduler.add(init_varsRoutineEachFrame());
      outer_loopLoopScheduler.add(init_varsRoutineEnd(snapshot));
      const titration_loop_mainLoopScheduler = new Scheduler(psychoJS);
      outer_loopLoopScheduler.add(titration_loop_mainLoopBegin(titration_loop_mainLoopScheduler, snapshot));
      outer_loopLoopScheduler.add(titration_loop_mainLoopScheduler);
      outer_loopLoopScheduler.add(titration_loop_mainLoopEnd);
      outer_loopLoopScheduler.add(outer_loopLoopEndIteration(outer_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var titration_loop_main;
function titration_loop_mainLoopBegin(titration_loop_mainLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    titration_loop_main = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'titration_loop_main'
    });
    psychoJS.experiment.addLoop(titration_loop_main); // add the loop to the experiment
    currentLoop = titration_loop_main;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTitration_loop_main of titration_loop_main) {
      snapshot = titration_loop_main.getSnapshot();
      titration_loop_mainLoopScheduler.add(importConditions(snapshot));
      titration_loop_mainLoopScheduler.add(trial_main1RoutineBegin(snapshot));
      titration_loop_mainLoopScheduler.add(trial_main1RoutineEachFrame());
      titration_loop_mainLoopScheduler.add(trial_main1RoutineEnd(snapshot));
      titration_loop_mainLoopScheduler.add(titration_loop_mainLoopEndIteration(titration_loop_mainLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function titration_loop_mainLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(titration_loop_main);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function titration_loop_mainLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function outer_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(outer_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function outer_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var risk_loop_prac2;
function risk_loop_prac2LoopBegin(risk_loop_prac2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    risk_loop_prac2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'risk_loop_prac2'
    });
    psychoJS.experiment.addLoop(risk_loop_prac2); // add the loop to the experiment
    currentLoop = risk_loop_prac2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRisk_loop_prac2 of risk_loop_prac2) {
      snapshot = risk_loop_prac2.getSnapshot();
      risk_loop_prac2LoopScheduler.add(importConditions(snapshot));
      risk_loop_prac2LoopScheduler.add(risk_prac2RoutineBegin(snapshot));
      risk_loop_prac2LoopScheduler.add(risk_prac2RoutineEachFrame());
      risk_loop_prac2LoopScheduler.add(risk_prac2RoutineEnd(snapshot));
      risk_loop_prac2LoopScheduler.add(risk_loop_prac2LoopEndIteration(risk_loop_prac2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function risk_loop_prac2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(risk_loop_prac2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function risk_loop_prac2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var risk_loop_main2;
function risk_loop_main2LoopBegin(risk_loop_main2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    risk_loop_main2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'delays.xlsx',
      seed: undefined, name: 'risk_loop_main2'
    });
    psychoJS.experiment.addLoop(risk_loop_main2); // add the loop to the experiment
    currentLoop = risk_loop_main2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRisk_loop_main2 of risk_loop_main2) {
      snapshot = risk_loop_main2.getSnapshot();
      risk_loop_main2LoopScheduler.add(importConditions(snapshot));
      risk_loop_main2LoopScheduler.add(risk_main2RoutineBegin(snapshot));
      risk_loop_main2LoopScheduler.add(risk_main2RoutineEachFrame());
      risk_loop_main2LoopScheduler.add(risk_main2RoutineEnd(snapshot));
      risk_loop_main2LoopScheduler.add(risk_loop_main2LoopEndIteration(risk_loop_main2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function risk_loop_main2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(risk_loop_main2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function risk_loop_main2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_prac1MaxDurationReached;
var current_offer;
var text_now_trial_prac1;
var text_late_trial_prac1;
var trial_prac1MaxDuration;
var trial_prac1Components;
function trial_prac1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_prac1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_prac1Clock.reset();
    routineTimer.reset();
    trial_prac1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from logic_trial_prac1
    current_offer = 500;
  text_now_trial_prac1 = `(A)\n今すぐ\n${current_offer} 円支払う`;
  text_late_trial_prac1 = `(B)\n${delay_text} に\n1,000 円支払う`;
    
  btn_now_trial_prac1.setText(text_now_trial_prac1);
  console.log('DEBUG btn_now_trial_prac1 text:', text_now_trial_prac1);
    if (btn_now_trial_prac1._pixi) {
      for (var __m = 0; __m < btn_now_trial_prac1._pixi.children.length; __m++) {
        var __ch = btn_now_trial_prac1._pixi.children[__m];
        if (__ch && __ch.constructor && String(__ch.constructor.name).indexOf('Text') === 0) {
          try {
            __ch.text = text_now_trial_prac1;
            if (__ch.style) {
              __ch.style.fill = '#000000';
            }
            __ch.visible = true;
          } catch (e) {
            console.log('DEBUG failed to force-set pixi text for btn_now_trial_prac1', e);
          }
        }
      }
    }
    // reset btn_now_trial_prac1 to account for continued clicks & clear times on/off
  btn_now_trial_prac1.reset()
  btn_now_trial_prac1.setText(text_now_trial_prac1);
  console.log('DEBUG btn_now_trial_prac1 text (after reset):', text_now_trial_prac1);
  btn_late_trial_prac1.setText(text_late_trial_prac1);
  console.log('DEBUG btn_late_trial_prac1 text:', text_late_trial_prac1);
    if (btn_late_trial_prac1._pixi) {
      for (var __n = 0; __n < btn_late_trial_prac1._pixi.children.length; __n++) {
        var __ch2 = btn_late_trial_prac1._pixi.children[__n];
        if (__ch2 && __ch2.constructor && String(__ch2.constructor.name).indexOf('Text') === 0) {
          try {
            __ch2.text = text_late_trial_prac1;
            if (__ch2.style) {
              __ch2.style.fill = '#000000';
            }
            __ch2.visible = true;
          } catch (e) {
            console.log('DEBUG failed to force-set pixi text for btn_late_trial_prac1', e);
          }
        }
      }
    }
    // reset btn_late_trial_prac1 to account for continued clicks & clear times on/off
  btn_late_trial_prac1.reset()
  btn_late_trial_prac1.setText(text_late_trial_prac1);
  console.log('DEBUG btn_late_trial_prac1 text (after reset):', text_late_trial_prac1);
    // setup some python lists for storing info about the mouse_trial_prac1
    // current position of the mouse:
    mouse_trial_prac1.x = [];
    mouse_trial_prac1.y = [];
    mouse_trial_prac1.leftButton = [];
    mouse_trial_prac1.midButton = [];
    mouse_trial_prac1.rightButton = [];
    mouse_trial_prac1.time = [];
    mouse_trial_prac1.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial_prac1.started', globalClock.getTime());
    trial_prac1MaxDuration = null
    // keep track of which components have finished
    trial_prac1Components = [];
    trial_prac1Components.push(msg_trial_prac1);
    trial_prac1Components.push(btn_now_trial_prac1);
    trial_prac1Components.push(btn_late_trial_prac1);
    trial_prac1Components.push(mouse_trial_prac1);
    
    for (const thisComponent of trial_prac1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_prac1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_prac1' ---
    // get current time
    t = trial_prac1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_trial_prac1* updates
    if (t >= 0.0 && msg_trial_prac1.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_trial_prac1.setText('（練習）\n\nどちらを選びますか？', false);
      // keep track of start time/frame for later
      msg_trial_prac1.tStart = t;  // (not accounting for frame time here)
      msg_trial_prac1.frameNStart = frameN;  // exact frame index
      
      msg_trial_prac1.setAutoDraw(true);
    }
    
    
    // if msg_trial_prac1 is active this frame...
    if (msg_trial_prac1.status === PsychoJS.Status.STARTED) {
      // update params
      msg_trial_prac1.setText('（練習）\n\nどちらを選びますか？', false);
    }
    
    
    // *btn_now_trial_prac1* updates
    if (t >= 0.01 && btn_now_trial_prac1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_now_trial_prac1.tStart = t;  // (not accounting for frame time here)
      btn_now_trial_prac1.frameNStart = frameN;  // exact frame index
      
      btn_now_trial_prac1.setAutoDraw(true);
      if (btn_now_trial_prac1._pixi) {
        console.log('DEBUG btn_now_trial_prac1 properties:', {
          text: btn_now_trial_prac1.text,
          letterHeight: btn_now_trial_prac1.letterHeight,
          font: btn_now_trial_prac1.font,
          color: btn_now_trial_prac1.color,
          fillColor: btn_now_trial_prac1.fillColor
        });
        console.log('DEBUG btn_now_trial_prac1 _pixi children count:', btn_now_trial_prac1._pixi.children.length);
        for (var __i = 0; __i < btn_now_trial_prac1._pixi.children.length; __i++) {
          var __c = btn_now_trial_prac1._pixi.children[__i];
          console.log('DEBUG btn_now_trial_prac1 child', __i, __c && __c.constructor && __c.constructor.name, 'text:', __c && __c.text, 'visible:', __c && __c.visible, 'style:', __c && __c.style);
        }
        // Force-set text and style on any PIXI Text child now that _pixi exists
        for (var __ii = 0; __ii < btn_now_trial_prac1._pixi.children.length; __ii++) {
          var __tc = btn_now_trial_prac1._pixi.children[__ii];
          if (__tc && __tc.constructor && String(__tc.constructor.name).indexOf('Text') === 0) {
            try {
              __tc.text = btn_now_trial_prac1.text || text_now_trial_prac1;
              if (__tc.style) __tc.style.fill = '#000000';
              __tc.visible = true;
            } catch (e) {
              console.log('DEBUG failed to force-set pixi text (after autodraw) for btn_now_trial_prac1', e);
            }
          }
        }
      }
    }
    
    
    // if btn_now_trial_prac1 is active this frame...
    if (btn_now_trial_prac1.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_now_trial_prac1.status === PsychoJS.Status.STARTED) {
      // check whether btn_now_trial_prac1 has been pressed
      if (btn_now_trial_prac1.isClicked) {
        if (!btn_now_trial_prac1.wasClicked) {
          // store time of first click
          btn_now_trial_prac1.timesOn.push(btn_now_trial_prac1.clock.getTime());
          // store time clicked until
          btn_now_trial_prac1.timesOff.push(btn_now_trial_prac1.clock.getTime());
        } else {
          // update time clicked until;
          btn_now_trial_prac1.timesOff[btn_now_trial_prac1.timesOff.length - 1] = btn_now_trial_prac1.clock.getTime();
        }
        if (!btn_now_trial_prac1.wasClicked) {
          
        }
        // if btn_now_trial_prac1 is still clicked next frame, it is not a new click
        btn_now_trial_prac1.wasClicked = true;
      } else {
        // if btn_now_trial_prac1 is clicked next frame, it is a new click
        btn_now_trial_prac1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_now_trial_prac1 hasn't started / has finished
      btn_now_trial_prac1.clock.reset();
      // if btn_now_trial_prac1 is clicked next frame, it is a new click
      btn_now_trial_prac1.wasClicked = false;
    }
    
    // *btn_late_trial_prac1* updates
    if (t >= 0.01 && btn_late_trial_prac1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_late_trial_prac1.tStart = t;  // (not accounting for frame time here)
      btn_late_trial_prac1.frameNStart = frameN;  // exact frame index
      
      btn_late_trial_prac1.setAutoDraw(true);
      if (btn_late_trial_prac1._pixi) {
        console.log('DEBUG btn_late_trial_prac1 properties:', {
          text: btn_late_trial_prac1.text,
          letterHeight: btn_late_trial_prac1.letterHeight,
          font: btn_late_trial_prac1.font,
          color: btn_late_trial_prac1.color,
          fillColor: btn_late_trial_prac1.fillColor
        });
        console.log('DEBUG btn_late_trial_prac1 _pixi children count:', btn_late_trial_prac1._pixi.children.length);
        for (var __j = 0; __j < btn_late_trial_prac1._pixi.children.length; __j++) {
          var __d = btn_late_trial_prac1._pixi.children[__j];
          console.log('DEBUG btn_late_trial_prac1 child', __j, __d && __d.constructor && __d.constructor.name, 'text:', __d && __d.text, 'visible:', __d && __d.visible, 'style:', __d && __d.style);
        }
        for (var __jj = 0; __jj < btn_late_trial_prac1._pixi.children.length; __jj++) {
          var __tc2 = btn_late_trial_prac1._pixi.children[__jj];
          if (__tc2 && __tc2.constructor && String(__tc2.constructor.name).indexOf('Text') === 0) {
            try {
              __tc2.text = btn_late_trial_prac1.text || text_late_trial_prac1;
              if (__tc2.style) __tc2.style.fill = '#000000';
              __tc2.visible = true;
            } catch (e) {
              console.log('DEBUG failed to force-set pixi text (after autodraw) for btn_late_trial_prac1', e);
            }
          }
        }
      }
    }
    
    
    // if btn_late_trial_prac1 is active this frame...
    if (btn_late_trial_prac1.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_late_trial_prac1.status === PsychoJS.Status.STARTED) {
      // check whether btn_late_trial_prac1 has been pressed
      if (btn_late_trial_prac1.isClicked) {
        if (!btn_late_trial_prac1.wasClicked) {
          // store time of first click
          btn_late_trial_prac1.timesOn.push(btn_late_trial_prac1.clock.getTime());
          // store time clicked until
          btn_late_trial_prac1.timesOff.push(btn_late_trial_prac1.clock.getTime());
        } else {
          // update time clicked until;
          btn_late_trial_prac1.timesOff[btn_late_trial_prac1.timesOff.length - 1] = btn_late_trial_prac1.clock.getTime();
        }
        if (!btn_late_trial_prac1.wasClicked) {
          
        }
        // if btn_late_trial_prac1 is still clicked next frame, it is not a new click
        btn_late_trial_prac1.wasClicked = true;
      } else {
        // if btn_late_trial_prac1 is clicked next frame, it is a new click
        btn_late_trial_prac1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_late_trial_prac1 hasn't started / has finished
      btn_late_trial_prac1.clock.reset();
      // if btn_late_trial_prac1 is clicked next frame, it is a new click
      btn_late_trial_prac1.wasClicked = false;
    }
    // *mouse_trial_prac1* updates
    if (t >= 0.0 && mouse_trial_prac1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_trial_prac1.tStart = t;  // (not accounting for frame time here)
      mouse_trial_prac1.frameNStart = frameN;  // exact frame index
      
      mouse_trial_prac1.status = PsychoJS.Status.STARTED;
      mouse_trial_prac1.mouseClock.reset();
      prevButtonState = mouse_trial_prac1.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_trial_prac1 is active this frame...
    if (mouse_trial_prac1.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_trial_prac1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_trial_prac1.clickableObjects = [btn_now_trial_prac1, btn_late_trial_prac1]
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_trial_prac1.clickableObjects)) {
              mouse_trial_prac1.clickableObjects = [mouse_trial_prac1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_trial_prac1.clickableObjects) {
              if (obj.contains(mouse_trial_prac1)) {
                  gotValidClick = true;
                  mouse_trial_prac1.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_trial_prac1.clicked_name.push(null);
          }
          _mouseXYs = mouse_trial_prac1.getPos();
          mouse_trial_prac1.x.push(_mouseXYs[0]);
          mouse_trial_prac1.y.push(_mouseXYs[1]);
          mouse_trial_prac1.leftButton.push(_mouseButtons[0]);
          mouse_trial_prac1.midButton.push(_mouseButtons[1]);
          mouse_trial_prac1.rightButton.push(_mouseButtons[2]);
          mouse_trial_prac1.time.push(mouse_trial_prac1.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_prac1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var clicked_now;
function trial_prac1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_prac1' ---
    for (const thisComponent of trial_prac1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_prac1.stopped', globalClock.getTime());
    // Run 'End Routine' code from logic_trial_prac1
    clicked_now = mouse_trial_prac1.isPressedIn(btn_now_trial_prac1);
    if (clicked_now) {
        psychoJS.experiment.addData("practice_response", "A_immediate");
    } else {
        psychoJS.experiment.addData("practice_response", "B_delayed");
    }
    
    psychoJS.experiment.addData('btn_now_trial_prac1.numClicks', btn_now_trial_prac1.numClicks);
    psychoJS.experiment.addData('btn_now_trial_prac1.timesOn', btn_now_trial_prac1.timesOn);
    psychoJS.experiment.addData('btn_now_trial_prac1.timesOff', btn_now_trial_prac1.timesOff);
    psychoJS.experiment.addData('btn_late_trial_prac1.numClicks', btn_late_trial_prac1.numClicks);
    psychoJS.experiment.addData('btn_late_trial_prac1.timesOn', btn_late_trial_prac1.timesOn);
    psychoJS.experiment.addData('btn_late_trial_prac1.timesOff', btn_late_trial_prac1.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_trial_prac1.x', mouse_trial_prac1.x);
    psychoJS.experiment.addData('mouse_trial_prac1.y', mouse_trial_prac1.y);
    psychoJS.experiment.addData('mouse_trial_prac1.leftButton', mouse_trial_prac1.leftButton);
    psychoJS.experiment.addData('mouse_trial_prac1.midButton', mouse_trial_prac1.midButton);
    psychoJS.experiment.addData('mouse_trial_prac1.rightButton', mouse_trial_prac1.rightButton);
    psychoJS.experiment.addData('mouse_trial_prac1.time', mouse_trial_prac1.time);
    psychoJS.experiment.addData('mouse_trial_prac1.clicked_name', mouse_trial_prac1.clicked_name);
    
    // the Routine "trial_prac1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_main1MaxDurationReached;
var instruction_main1MaxDuration;
var instruction_main1Components;
function instruction_main1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_main1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_main1Clock.reset();
    routineTimer.reset();
    instruction_main1MaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_next_inst_main1 to account for continued clicks & clear times on/off
    btn_next_inst_main1.reset()
    // setup some python lists for storing info about the mouse_inst_main1
    // current position of the mouse:
    mouse_inst_main1.x = [];
    mouse_inst_main1.y = [];
    mouse_inst_main1.leftButton = [];
    mouse_inst_main1.midButton = [];
    mouse_inst_main1.rightButton = [];
    mouse_inst_main1.time = [];
    mouse_inst_main1.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instruction_main1.started', globalClock.getTime());
    instruction_main1MaxDuration = null
    // keep track of which components have finished
    instruction_main1Components = [];
    instruction_main1Components.push(msg_inst_main1);
    instruction_main1Components.push(btn_next_inst_main1);
    instruction_main1Components.push(mouse_inst_main1);
    
    for (const thisComponent of instruction_main1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_main1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_main1' ---
    // get current time
    t = instruction_main1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_inst_main1* updates
    if (t >= 0.0 && msg_inst_main1.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_inst_main1.setText('練習はこれで終わりです。\n\n本実験でも練習問題と同じように\n選びたい方をクリックしてください。\n\n「次へ」を押すと\n条件がもう一度提示された後、\n実験が始まります。', false);
      // keep track of start time/frame for later
      msg_inst_main1.tStart = t;  // (not accounting for frame time here)
      msg_inst_main1.frameNStart = frameN;  // exact frame index
      
      msg_inst_main1.setAutoDraw(true);
    }
    
    
    // if msg_inst_main1 is active this frame...
    if (msg_inst_main1.status === PsychoJS.Status.STARTED) {
      // update params
      msg_inst_main1.setText('練習はこれで終わりです。\n\n本実験でも練習問題と同じように\n選びたい方をクリックしてください。\n\n「次へ」を押すと\n条件がもう一度提示された後、\n実験が始まります。', false);
    }
    
    
    // *btn_next_inst_main1* updates
    if (t >= 0 && btn_next_inst_main1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_inst_main1.tStart = t;  // (not accounting for frame time here)
      btn_next_inst_main1.frameNStart = frameN;  // exact frame index
      
      btn_next_inst_main1.setAutoDraw(true);
    }
    
    
    // if btn_next_inst_main1 is active this frame...
    if (btn_next_inst_main1.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_inst_main1.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_inst_main1 has been pressed
      if (btn_next_inst_main1.isClicked) {
        if (!btn_next_inst_main1.wasClicked) {
          // store time of first click
          btn_next_inst_main1.timesOn.push(btn_next_inst_main1.clock.getTime());
          // store time clicked until
          btn_next_inst_main1.timesOff.push(btn_next_inst_main1.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_inst_main1.timesOff[btn_next_inst_main1.timesOff.length - 1] = btn_next_inst_main1.clock.getTime();
        }
        if (!btn_next_inst_main1.wasClicked) {
          
        }
        // if btn_next_inst_main1 is still clicked next frame, it is not a new click
        btn_next_inst_main1.wasClicked = true;
      } else {
        // if btn_next_inst_main1 is clicked next frame, it is a new click
        btn_next_inst_main1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_inst_main1 hasn't started / has finished
      btn_next_inst_main1.clock.reset();
      // if btn_next_inst_main1 is clicked next frame, it is a new click
      btn_next_inst_main1.wasClicked = false;
    }
    // *mouse_inst_main1* updates
    if (t >= 0.0 && mouse_inst_main1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_inst_main1.tStart = t;  // (not accounting for frame time here)
      mouse_inst_main1.frameNStart = frameN;  // exact frame index
      
      mouse_inst_main1.status = PsychoJS.Status.STARTED;
      mouse_inst_main1.mouseClock.reset();
      prevButtonState = mouse_inst_main1.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_inst_main1 is active this frame...
    if (mouse_inst_main1.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_inst_main1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_inst_main1.clickableObjects = btn_next_inst_main1
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_inst_main1.clickableObjects)) {
              mouse_inst_main1.clickableObjects = [mouse_inst_main1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_inst_main1.clickableObjects) {
              if (obj.contains(mouse_inst_main1)) {
                  gotValidClick = true;
                  mouse_inst_main1.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_inst_main1.clicked_name.push(null);
          }
          _mouseXYs = mouse_inst_main1.getPos();
          mouse_inst_main1.x.push(_mouseXYs[0]);
          mouse_inst_main1.y.push(_mouseXYs[1]);
          mouse_inst_main1.leftButton.push(_mouseButtons[0]);
          mouse_inst_main1.midButton.push(_mouseButtons[1]);
          mouse_inst_main1.rightButton.push(_mouseButtons[2]);
          mouse_inst_main1.time.push(mouse_inst_main1.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_main1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_main1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_main1' ---
    for (const thisComponent of instruction_main1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_main1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_next_inst_main1.numClicks', btn_next_inst_main1.numClicks);
    psychoJS.experiment.addData('btn_next_inst_main1.timesOn', btn_next_inst_main1.timesOn);
    psychoJS.experiment.addData('btn_next_inst_main1.timesOff', btn_next_inst_main1.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_inst_main1.x', mouse_inst_main1.x);
    psychoJS.experiment.addData('mouse_inst_main1.y', mouse_inst_main1.y);
    psychoJS.experiment.addData('mouse_inst_main1.leftButton', mouse_inst_main1.leftButton);
    psychoJS.experiment.addData('mouse_inst_main1.midButton', mouse_inst_main1.midButton);
    psychoJS.experiment.addData('mouse_inst_main1.rightButton', mouse_inst_main1.rightButton);
    psychoJS.experiment.addData('mouse_inst_main1.time', mouse_inst_main1.time);
    psychoJS.experiment.addData('mouse_inst_main1.clicked_name', mouse_inst_main1.clicked_name);
    
    // the Routine "instruction_main1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var init_varsMaxDurationReached;
var UB;
var LB;
var IA;
var init_varsMaxDuration;
var init_varsComponents;
function init_varsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'init_vars' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    init_varsClock.reset();
    routineTimer.reset();
    init_varsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from init_vars_code
    UB = 1000;
    LB = 0;
    IA = 500;
    
    psychoJS.experiment.addData('init_vars.started', globalClock.getTime());
    init_varsMaxDuration = null
    // keep track of which components have finished
    init_varsComponents = [];
    
    for (const thisComponent of init_varsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function init_varsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'init_vars' ---
    // get current time
    t = init_varsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of init_varsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_varsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'init_vars' ---
    for (const thisComponent of init_varsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('init_vars.stopped', globalClock.getTime());
    // the Routine "init_vars" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_main1MaxDurationReached;
var text_now_trial_main1;
var text_late_trial_main1;
var trial_main1MaxDuration;
var trial_main1Components;
function trial_main1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_main1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_main1Clock.reset();
    routineTimer.reset();
    trial_main1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from logic_trial_main1
    current_offer = Number.parseInt(IA);
  text_now_trial_main1 = `(A)\n今すぐ\n${current_offer} 円支払う`;
  text_late_trial_main1 = `(B)\n${delay_text} に\n1,000 円支払う`;
    
  btn_now_trial_main1.setText(text_now_trial_main1);
  console.log('DEBUG btn_now_trial_main1 text:', text_now_trial_main1);
    if (btn_now_trial_main1._pixi) {
      for (var __o = 0; __o < btn_now_trial_main1._pixi.children.length; __o++) {
        var __ch3 = btn_now_trial_main1._pixi.children[__o];
        if (__ch3 && __ch3.constructor && String(__ch3.constructor.name).indexOf('Text') === 0) {
          try {
            __ch3.text = text_now_trial_main1;
            if (__ch3.style) {
              __ch3.style.fill = '#000000';
            }
            __ch3.visible = true;
          } catch (e) {
            console.log('DEBUG failed to force-set pixi text for btn_now_trial_main1', e);
          }
        }
      }
    }
  // reset btn_now_trial_main1 to account for continued clicks & clear times on/off
  btn_now_trial_main1.reset()
  // set text again after reset (reset may clear internal pixi text)
  btn_now_trial_main1.setText(text_now_trial_main1);
  console.log('DEBUG btn_now_trial_main1 text (after reset):', text_now_trial_main1);
  btn_late_trial_main1.setText(text_late_trial_main1);
  console.log('DEBUG btn_late_trial_main1 text:', text_late_trial_main1);
    if (btn_late_trial_main1._pixi) {
      for (var __p = 0; __p < btn_late_trial_main1._pixi.children.length; __p++) {
        var __ch4 = btn_late_trial_main1._pixi.children[__p];
        if (__ch4 && __ch4.constructor && String(__ch4.constructor.name).indexOf('Text') === 0) {
          try {
            __ch4.text = text_late_trial_main1;
            if (__ch4.style) {
              __ch4.style.fill = '#000000';
            }
            __ch4.visible = true;
          } catch (e) {
            console.log('DEBUG failed to force-set pixi text for btn_late_trial_main1', e);
          }
        }
      }
    }
  // reset btn_late_trial_main1 to account for continued clicks & clear times on/off
  btn_late_trial_main1.reset()
  // set text again after reset
  btn_late_trial_main1.setText(text_late_trial_main1);
  console.log('DEBUG btn_late_trial_main1 text (after reset):', text_late_trial_main1);
    // setup some python lists for storing info about the mouse_trial_main1
    // current position of the mouse:
    mouse_trial_main1.x = [];
    mouse_trial_main1.y = [];
    mouse_trial_main1.leftButton = [];
    mouse_trial_main1.midButton = [];
    mouse_trial_main1.rightButton = [];
    mouse_trial_main1.time = [];
    mouse_trial_main1.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial_main1.started', globalClock.getTime());
    trial_main1MaxDuration = null
    // keep track of which components have finished
    trial_main1Components = [];
    trial_main1Components.push(msg_trial_main1);
    trial_main1Components.push(btn_now_trial_main1);
    trial_main1Components.push(btn_late_trial_main1);
    trial_main1Components.push(mouse_trial_main1);
    
    for (const thisComponent of trial_main1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_main1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_main1' ---
    // get current time
    t = trial_main1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_trial_main1* updates
    if (t >= 0.0 && msg_trial_main1.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_trial_main1.setText('どちらを選びますか？', false);
      // keep track of start time/frame for later
      msg_trial_main1.tStart = t;  // (not accounting for frame time here)
      msg_trial_main1.frameNStart = frameN;  // exact frame index
      
      msg_trial_main1.setAutoDraw(true);
    }
    
    
    // if msg_trial_main1 is active this frame...
    if (msg_trial_main1.status === PsychoJS.Status.STARTED) {
      // update params
      msg_trial_main1.setText('どちらを選びますか？', false);
    }
    
    
    // *btn_now_trial_main1* updates
    if (t >= 0.01 && btn_now_trial_main1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_now_trial_main1.tStart = t;  // (not accounting for frame time here)
      btn_now_trial_main1.frameNStart = frameN;  // exact frame index
      
      btn_now_trial_main1.setAutoDraw(true);
      if (btn_now_trial_main1._pixi) {
        console.log('DEBUG btn_now_trial_main1 properties:', {
          text: btn_now_trial_main1.text,
          letterHeight: btn_now_trial_main1.letterHeight,
          font: btn_now_trial_main1.font,
          color: btn_now_trial_main1.color,
          fillColor: btn_now_trial_main1.fillColor
        });
        console.log('DEBUG btn_now_trial_main1 _pixi children count:', btn_now_trial_main1._pixi.children.length);
        for (var __k = 0; __k < btn_now_trial_main1._pixi.children.length; __k++) {
          var __e = btn_now_trial_main1._pixi.children[__k];
          console.log('DEBUG btn_now_trial_main1 child', __k, __e && __e.constructor && __e.constructor.name, 'text:', __e && __e.text, 'visible:', __e && __e.visible, 'style:', __e && __e.style);
        }
        // Force-set text/style on PIXI Text child after autodraw
        for (var __kk = 0; __kk < btn_now_trial_main1._pixi.children.length; __kk++) {
          var __tc3 = btn_now_trial_main1._pixi.children[__kk];
          if (__tc3 && __tc3.constructor && String(__tc3.constructor.name).indexOf('Text') === 0) {
            try {
              __tc3.text = btn_now_trial_main1.text || text_now_trial_main1;
              if (__tc3.style) __tc3.style.fill = '#000000';
              __tc3.visible = true;
            } catch (e) {
              console.log('DEBUG failed to force-set pixi text (after autodraw) for btn_now_trial_main1', e);
            }
          }
        }
      }
    }
    
    
    // if btn_now_trial_main1 is active this frame...
    if (btn_now_trial_main1.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_now_trial_main1.status === PsychoJS.Status.STARTED) {
      // check whether btn_now_trial_main1 has been pressed
      if (btn_now_trial_main1.isClicked) {
        if (!btn_now_trial_main1.wasClicked) {
          // store time of first click
          btn_now_trial_main1.timesOn.push(btn_now_trial_main1.clock.getTime());
          // store time clicked until
          btn_now_trial_main1.timesOff.push(btn_now_trial_main1.clock.getTime());
        } else {
          // update time clicked until;
          btn_now_trial_main1.timesOff[btn_now_trial_main1.timesOff.length - 1] = btn_now_trial_main1.clock.getTime();
        }
        if (!btn_now_trial_main1.wasClicked) {
          
        }
        // if btn_now_trial_main1 is still clicked next frame, it is not a new click
        btn_now_trial_main1.wasClicked = true;
      } else {
        // if btn_now_trial_main1 is clicked next frame, it is a new click
        btn_now_trial_main1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_now_trial_main1 hasn't started / has finished
      btn_now_trial_main1.clock.reset();
      // if btn_now_trial_main1 is clicked next frame, it is a new click
      btn_now_trial_main1.wasClicked = false;
    }
    
    // *btn_late_trial_main1* updates
    if (t >= 0.01 && btn_late_trial_main1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_late_trial_main1.tStart = t;  // (not accounting for frame time here)
      btn_late_trial_main1.frameNStart = frameN;  // exact frame index
      
      btn_late_trial_main1.setAutoDraw(true);
      if (btn_late_trial_main1._pixi) {
        console.log('DEBUG btn_late_trial_main1 properties:', {
          text: btn_late_trial_main1.text,
          letterHeight: btn_late_trial_main1.letterHeight,
          font: btn_late_trial_main1.font,
          color: btn_late_trial_main1.color,
          fillColor: btn_late_trial_main1.fillColor
        });
        console.log('DEBUG btn_late_trial_main1 _pixi children count:', btn_late_trial_main1._pixi.children.length);
        for (var __l = 0; __l < btn_late_trial_main1._pixi.children.length; __l++) {
          var __f = btn_late_trial_main1._pixi.children[__l];
          console.log('DEBUG btn_late_trial_main1 child', __l, __f && __f.constructor && __f.constructor.name, 'text:', __f && __f.text, 'visible:', __f && __f.visible, 'style:', __f && __f.style);
        }
        for (var __ll = 0; __ll < btn_late_trial_main1._pixi.children.length; __ll++) {
          var __tc4 = btn_late_trial_main1._pixi.children[__ll];
          if (__tc4 && __tc4.constructor && String(__tc4.constructor.name).indexOf('Text') === 0) {
            try {
              __tc4.text = btn_late_trial_main1.text || text_late_trial_main1;
              if (__tc4.style) __tc4.style.fill = '#000000';
              __tc4.visible = true;
            } catch (e) {
              console.log('DEBUG failed to force-set pixi text (after autodraw) for btn_late_trial_main1', e);
            }
          }
        }
      }
    }
    
    
    // if btn_late_trial_main1 is active this frame...
    if (btn_late_trial_main1.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_late_trial_main1.status === PsychoJS.Status.STARTED) {
      // check whether btn_late_trial_main1 has been pressed
      if (btn_late_trial_main1.isClicked) {
        if (!btn_late_trial_main1.wasClicked) {
          // store time of first click
          btn_late_trial_main1.timesOn.push(btn_late_trial_main1.clock.getTime());
          // store time clicked until
          btn_late_trial_main1.timesOff.push(btn_late_trial_main1.clock.getTime());
        } else {
          // update time clicked until;
          btn_late_trial_main1.timesOff[btn_late_trial_main1.timesOff.length - 1] = btn_late_trial_main1.clock.getTime();
        }
        if (!btn_late_trial_main1.wasClicked) {
          
        }
        // if btn_late_trial_main1 is still clicked next frame, it is not a new click
        btn_late_trial_main1.wasClicked = true;
      } else {
        // if btn_late_trial_main1 is clicked next frame, it is a new click
        btn_late_trial_main1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_late_trial_main1 hasn't started / has finished
      btn_late_trial_main1.clock.reset();
      // if btn_late_trial_main1 is clicked next frame, it is a new click
      btn_late_trial_main1.wasClicked = false;
    }
    // *mouse_trial_main1* updates
    if (t >= 0.0 && mouse_trial_main1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_trial_main1.tStart = t;  // (not accounting for frame time here)
      mouse_trial_main1.frameNStart = frameN;  // exact frame index
      
      mouse_trial_main1.status = PsychoJS.Status.STARTED;
      mouse_trial_main1.mouseClock.reset();
      prevButtonState = mouse_trial_main1.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_trial_main1 is active this frame...
    if (mouse_trial_main1.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_trial_main1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_trial_main1.clickableObjects = [btn_now_trial_main1, btn_late_trial_main1]
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_trial_main1.clickableObjects)) {
              mouse_trial_main1.clickableObjects = [mouse_trial_main1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_trial_main1.clickableObjects) {
              if (obj.contains(mouse_trial_main1)) {
                  gotValidClick = true;
                  mouse_trial_main1.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_trial_main1.clicked_name.push(null);
          }
          _mouseXYs = mouse_trial_main1.getPos();
          mouse_trial_main1.x.push(_mouseXYs[0]);
          mouse_trial_main1.y.push(_mouseXYs[1]);
          mouse_trial_main1.leftButton.push(_mouseButtons[0]);
          mouse_trial_main1.midButton.push(_mouseButtons[1]);
          mouse_trial_main1.rightButton.push(_mouseButtons[2]);
          mouse_trial_main1.time.push(mouse_trial_main1.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_main1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var clicked_late;
var response_data;
function trial_main1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_main1' ---
    for (const thisComponent of trial_main1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_main1.stopped', globalClock.getTime());
    // Run 'End Routine' code from logic_trial_main1
    clicked_now = mouse_trial_main1.isPressedIn(btn_now_trial_main1);
    clicked_late = mouse_trial_main1.isPressedIn(btn_late_trial_main1);
    response_data = null;
    if (clicked_now) {
        LB = ((LB + IA) / 2);
        LB = IA;
        response_data = "A_immediate";
    } else {
        if (clicked_late) {
            UB = IA;
            response_data = "B_delayed";
        }
    }
    IA = ((UB + LB) / 2);
    psychoJS.experiment.addData("delay", delay_text);
    psychoJS.experiment.addData("response", response_data);
    psychoJS.experiment.addData("current_IA", current_offer);
    psychoJS.experiment.addData("UB", UB);
    psychoJS.experiment.addData("LB", LB);
    if (((UB - LB) <= 50)) {
        psychoJS.experiment.addData("final_indifference_point", IA);
        titration_loop_main.finished = true;
    }
    
    psychoJS.experiment.addData('btn_now_trial_main1.numClicks', btn_now_trial_main1.numClicks);
    psychoJS.experiment.addData('btn_now_trial_main1.timesOn', btn_now_trial_main1.timesOn);
    psychoJS.experiment.addData('btn_now_trial_main1.timesOff', btn_now_trial_main1.timesOff);
    psychoJS.experiment.addData('btn_late_trial_main1.numClicks', btn_late_trial_main1.numClicks);
    psychoJS.experiment.addData('btn_late_trial_main1.timesOn', btn_late_trial_main1.timesOn);
    psychoJS.experiment.addData('btn_late_trial_main1.timesOff', btn_late_trial_main1.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_trial_main1.x', mouse_trial_main1.x);
    psychoJS.experiment.addData('mouse_trial_main1.y', mouse_trial_main1.y);
    psychoJS.experiment.addData('mouse_trial_main1.leftButton', mouse_trial_main1.leftButton);
    psychoJS.experiment.addData('mouse_trial_main1.midButton', mouse_trial_main1.midButton);
    psychoJS.experiment.addData('mouse_trial_main1.rightButton', mouse_trial_main1.rightButton);
    psychoJS.experiment.addData('mouse_trial_main1.time', mouse_trial_main1.time);
    psychoJS.experiment.addData('mouse_trial_main1.clicked_name', mouse_trial_main1.clicked_name);
    
    // the Routine "trial_main1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_prac2MaxDurationReached;
var instruction_prac2MaxDuration;
var instruction_prac2Components;
function instruction_prac2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_prac2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_prac2Clock.reset();
    routineTimer.reset();
    instruction_prac2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_next_inst_prac2 to account for continued clicks & clear times on/off
    btn_next_inst_prac2.reset()
    // setup some python lists for storing info about the mouse_inst_prac2
    // current position of the mouse:
    mouse_inst_prac2.x = [];
    mouse_inst_prac2.y = [];
    mouse_inst_prac2.leftButton = [];
    mouse_inst_prac2.midButton = [];
    mouse_inst_prac2.rightButton = [];
    mouse_inst_prac2.time = [];
    mouse_inst_prac2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instruction_prac2.started', globalClock.getTime());
    instruction_prac2MaxDuration = null
    // keep track of which components have finished
    instruction_prac2Components = [];
    instruction_prac2Components.push(msg_inst_prac2);
    instruction_prac2Components.push(btn_next_inst_prac2);
    instruction_prac2Components.push(mouse_inst_prac2);
    
    for (const thisComponent of instruction_prac2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_prac2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_prac2' ---
    // get current time
    t = instruction_prac2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_inst_prac2* updates
    if (t >= 0.0 && msg_inst_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_inst_prac2.setText('次に、スライダー課題を行います。\n\n操作に慣れてもらうため、\n選択課題の練習を数回行います。\n\n真ん中の棒を左右に操作した後、\n「次へ」を押してください。\n\nこれは練習です。\n実験結果には影響しません。\n\n「練習へ進む」を押してください。', false);
      // keep track of start time/frame for later
      msg_inst_prac2.tStart = t;  // (not accounting for frame time here)
      msg_inst_prac2.frameNStart = frameN;  // exact frame index
      
      msg_inst_prac2.setAutoDraw(true);
    }
    
    
    // if msg_inst_prac2 is active this frame...
    if (msg_inst_prac2.status === PsychoJS.Status.STARTED) {
      // update params
      msg_inst_prac2.setText('次に、スライダー課題を行います。\n\n操作に慣れてもらうため、\n選択課題の練習を数回行います。\n\n真ん中の棒を左右に操作した後、\n「次へ」を押してください。\n\nこれは練習です。\n実験結果には影響しません。\n\n「練習へ進む」を押してください。', false);
    }
    
    
    // *btn_next_inst_prac2* updates
    if (t >= 0 && btn_next_inst_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_inst_prac2.tStart = t;  // (not accounting for frame time here)
      btn_next_inst_prac2.frameNStart = frameN;  // exact frame index
      
      btn_next_inst_prac2.setAutoDraw(true);
    }
    
    
    // if btn_next_inst_prac2 is active this frame...
    if (btn_next_inst_prac2.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_inst_prac2.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_inst_prac2 has been pressed
      if (btn_next_inst_prac2.isClicked) {
        if (!btn_next_inst_prac2.wasClicked) {
          // store time of first click
          btn_next_inst_prac2.timesOn.push(btn_next_inst_prac2.clock.getTime());
          // store time clicked until
          btn_next_inst_prac2.timesOff.push(btn_next_inst_prac2.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_inst_prac2.timesOff[btn_next_inst_prac2.timesOff.length - 1] = btn_next_inst_prac2.clock.getTime();
        }
        if (!btn_next_inst_prac2.wasClicked) {
          
        }
        // if btn_next_inst_prac2 is still clicked next frame, it is not a new click
        btn_next_inst_prac2.wasClicked = true;
      } else {
        // if btn_next_inst_prac2 is clicked next frame, it is a new click
        btn_next_inst_prac2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_inst_prac2 hasn't started / has finished
      btn_next_inst_prac2.clock.reset();
      // if btn_next_inst_prac2 is clicked next frame, it is a new click
      btn_next_inst_prac2.wasClicked = false;
    }
    // *mouse_inst_prac2* updates
    if (t >= 0.0 && mouse_inst_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_inst_prac2.tStart = t;  // (not accounting for frame time here)
      mouse_inst_prac2.frameNStart = frameN;  // exact frame index
      
      mouse_inst_prac2.status = PsychoJS.Status.STARTED;
      mouse_inst_prac2.mouseClock.reset();
      prevButtonState = mouse_inst_prac2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_inst_prac2 is active this frame...
    if (mouse_inst_prac2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_inst_prac2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_inst_prac2.clickableObjects = btn_next_inst_prac2
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_inst_prac2.clickableObjects)) {
              mouse_inst_prac2.clickableObjects = [mouse_inst_prac2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_inst_prac2.clickableObjects) {
              if (obj.contains(mouse_inst_prac2)) {
                  gotValidClick = true;
                  mouse_inst_prac2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_inst_prac2.clicked_name.push(null);
          }
          _mouseXYs = mouse_inst_prac2.getPos();
          mouse_inst_prac2.x.push(_mouseXYs[0]);
          mouse_inst_prac2.y.push(_mouseXYs[1]);
          mouse_inst_prac2.leftButton.push(_mouseButtons[0]);
          mouse_inst_prac2.midButton.push(_mouseButtons[1]);
          mouse_inst_prac2.rightButton.push(_mouseButtons[2]);
          mouse_inst_prac2.time.push(mouse_inst_prac2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_prac2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_prac2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_prac2' ---
    for (const thisComponent of instruction_prac2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_prac2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_next_inst_prac2.numClicks', btn_next_inst_prac2.numClicks);
    psychoJS.experiment.addData('btn_next_inst_prac2.timesOn', btn_next_inst_prac2.timesOn);
    psychoJS.experiment.addData('btn_next_inst_prac2.timesOff', btn_next_inst_prac2.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_inst_prac2.x', mouse_inst_prac2.x);
    psychoJS.experiment.addData('mouse_inst_prac2.y', mouse_inst_prac2.y);
    psychoJS.experiment.addData('mouse_inst_prac2.leftButton', mouse_inst_prac2.leftButton);
    psychoJS.experiment.addData('mouse_inst_prac2.midButton', mouse_inst_prac2.midButton);
    psychoJS.experiment.addData('mouse_inst_prac2.rightButton', mouse_inst_prac2.rightButton);
    psychoJS.experiment.addData('mouse_inst_prac2.time', mouse_inst_prac2.time);
    psychoJS.experiment.addData('mouse_inst_prac2.clicked_name', mouse_inst_prac2.clicked_name);
    
    // the Routine "instruction_prac2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var risk_prac2MaxDurationReached;
var msg_text_risk_prac;
var risk_prac2MaxDuration;
var risk_prac2Components;
function risk_prac2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'risk_prac2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    risk_prac2Clock.reset();
    routineTimer.reset();
    risk_prac2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_risk_prac2
    msg_text_risk_prac = `（練習）
    ${delay_text}の徴収について
    
    実際に徴収される確率は
    何%くらいだと思いますか？`;
    slider_risk_prac2.reset()
    // reset btn_next_risk_prac2 to account for continued clicks & clear times on/off
    btn_next_risk_prac2.reset()
    // setup some python lists for storing info about the mouse_risk_prac2
    // current position of the mouse:
    mouse_risk_prac2.x = [];
    mouse_risk_prac2.y = [];
    mouse_risk_prac2.leftButton = [];
    mouse_risk_prac2.midButton = [];
    mouse_risk_prac2.rightButton = [];
    mouse_risk_prac2.time = [];
    mouse_risk_prac2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('risk_prac2.started', globalClock.getTime());
    risk_prac2MaxDuration = null
    // keep track of which components have finished
    risk_prac2Components = [];
    risk_prac2Components.push(msg_risk_prac2);
    risk_prac2Components.push(slider_risk_prac2);
    risk_prac2Components.push(text_val_prac2);
    risk_prac2Components.push(btn_next_risk_prac2);
    risk_prac2Components.push(mouse_risk_prac2);
    
    for (const thisComponent of risk_prac2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var current_val;
function risk_prac2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'risk_prac2' ---
    // get current time
    t = risk_prac2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_risk_prac2
    if ((slider_risk_prac2.rating !== null)) {
        current_val = Number.parseInt(slider_risk_prac2.rating).toString();
    } else {
        current_val = "";
    }
    
    
    // *msg_risk_prac2* updates
    if (t >= 0.0 && msg_risk_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_risk_prac2.setText(msg_text_risk_prac, false);
      // keep track of start time/frame for later
      msg_risk_prac2.tStart = t;  // (not accounting for frame time here)
      msg_risk_prac2.frameNStart = frameN;  // exact frame index
      
      msg_risk_prac2.setAutoDraw(true);
    }
    
    
    // if msg_risk_prac2 is active this frame...
    if (msg_risk_prac2.status === PsychoJS.Status.STARTED) {
      // update params
      msg_risk_prac2.setText(msg_text_risk_prac, false);
    }
    
    
    // *slider_risk_prac2* updates
    if (t >= 0.0 && slider_risk_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_risk_prac2.tStart = t;  // (not accounting for frame time here)
      slider_risk_prac2.frameNStart = frameN;  // exact frame index
      
      slider_risk_prac2.setAutoDraw(true);
    }
    
    
    // if slider_risk_prac2 is active this frame...
    if (slider_risk_prac2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_val_prac2* updates
    if (t >= 0.0 && text_val_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      text_val_prac2.setText(current_val, false);
      // keep track of start time/frame for later
      text_val_prac2.tStart = t;  // (not accounting for frame time here)
      text_val_prac2.frameNStart = frameN;  // exact frame index
      
      text_val_prac2.setAutoDraw(true);
    }
    
    
    // if text_val_prac2 is active this frame...
    if (text_val_prac2.status === PsychoJS.Status.STARTED) {
      // update params
      text_val_prac2.setText(current_val, false);
    }
    
    
    // *btn_next_risk_prac2* updates
    if (t >= 0.0 && btn_next_risk_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_risk_prac2.tStart = t;  // (not accounting for frame time here)
      btn_next_risk_prac2.frameNStart = frameN;  // exact frame index
      
      btn_next_risk_prac2.setAutoDraw(true);
    }

    // ★ ここからカスタマイズ：スライダー回答チェック ★
    if (btn_next_risk_prac2.status === PsychoJS.Status.STARTED) {
      // スライダーが未回答(undefined)かチェック
      if (slider_risk_prac2.getRating() !== undefined && slider_risk_prac2.getRating() !== null) {
          // 回答あり：ボタンを明るくして、クリックを受け付ける
          btn_next_risk_prac2.setOpacity(1.0);
          
          if (btn_next_risk_prac2.isClicked) { 
              continueRoutine = false; 
          }
      } else {
          // 回答なし：ボタンを薄くして、クリックしても無視する
          btn_next_risk_prac2.setOpacity(0.2);
          // ※ここでクリック判定をしないので進めない
      }
    }
    
    
    // if btn_next_risk_prac2 is active this frame...
    if (btn_next_risk_prac2.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_risk_prac2.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_risk_prac2 has been pressed
      if (btn_next_risk_prac2.isClicked) {
        if (!btn_next_risk_prac2.wasClicked) {
          // store time of first click
          btn_next_risk_prac2.timesOn.push(btn_next_risk_prac2.clock.getTime());
          // store time clicked until
          btn_next_risk_prac2.timesOff.push(btn_next_risk_prac2.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_risk_prac2.timesOff[btn_next_risk_prac2.timesOff.length - 1] = btn_next_risk_prac2.clock.getTime();
        }
        if (!btn_next_risk_prac2.wasClicked) {
          
        }
        // if btn_next_risk_prac2 is still clicked next frame, it is not a new click
        btn_next_risk_prac2.wasClicked = true;
      } else {
        // if btn_next_risk_prac2 is clicked next frame, it is a new click
        btn_next_risk_prac2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_risk_prac2 hasn't started / has finished
      btn_next_risk_prac2.clock.reset();
      // if btn_next_risk_prac2 is clicked next frame, it is a new click
      btn_next_risk_prac2.wasClicked = false;
    }
    // *mouse_risk_prac2* updates
    if (t >= 0.0 && mouse_risk_prac2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_risk_prac2.tStart = t;  // (not accounting for frame time here)
      mouse_risk_prac2.frameNStart = frameN;  // exact frame index
      
      mouse_risk_prac2.status = PsychoJS.Status.STARTED;
      mouse_risk_prac2.mouseClock.reset();
      prevButtonState = mouse_risk_prac2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_risk_prac2 is active this frame...
    if (mouse_risk_prac2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_risk_prac2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_risk_prac2.clickableObjects = btn_next_inst_prac2
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_risk_prac2.clickableObjects)) {
              mouse_risk_prac2.clickableObjects = [mouse_risk_prac2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_risk_prac2.clickableObjects) {
              if (obj.contains(mouse_risk_prac2)) {
                  gotValidClick = true;
                  mouse_risk_prac2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_risk_prac2.clicked_name.push(null);
          }
          _mouseXYs = mouse_risk_prac2.getPos();
          mouse_risk_prac2.x.push(_mouseXYs[0]);
          mouse_risk_prac2.y.push(_mouseXYs[1]);
          mouse_risk_prac2.leftButton.push(_mouseButtons[0]);
          mouse_risk_prac2.midButton.push(_mouseButtons[1]);
          mouse_risk_prac2.rightButton.push(_mouseButtons[2]);
          mouse_risk_prac2.time.push(mouse_risk_prac2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of risk_prac2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function risk_prac2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'risk_prac2' ---
    for (const thisComponent of risk_prac2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('risk_prac2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_risk_prac2.response', slider_risk_prac2.getRating());
    psychoJS.experiment.addData('slider_risk_prac2.rt', slider_risk_prac2.getRT());
    psychoJS.experiment.addData('btn_next_risk_prac2.numClicks', btn_next_risk_prac2.numClicks);
    psychoJS.experiment.addData('btn_next_risk_prac2.timesOn', btn_next_risk_prac2.timesOn);
    psychoJS.experiment.addData('btn_next_risk_prac2.timesOff', btn_next_risk_prac2.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_risk_prac2.x', mouse_risk_prac2.x);
    psychoJS.experiment.addData('mouse_risk_prac2.y', mouse_risk_prac2.y);
    psychoJS.experiment.addData('mouse_risk_prac2.leftButton', mouse_risk_prac2.leftButton);
    psychoJS.experiment.addData('mouse_risk_prac2.midButton', mouse_risk_prac2.midButton);
    psychoJS.experiment.addData('mouse_risk_prac2.rightButton', mouse_risk_prac2.rightButton);
    psychoJS.experiment.addData('mouse_risk_prac2.time', mouse_risk_prac2.time);
    psychoJS.experiment.addData('mouse_risk_prac2.clicked_name', mouse_risk_prac2.clicked_name);
    
    // the Routine "risk_prac2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_main2MaxDurationReached;
var instruction_main2MaxDuration;
var instruction_main2Components;
function instruction_main2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_main2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_main2Clock.reset();
    routineTimer.reset();
    instruction_main2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset btn_next_inst_main2 to account for continued clicks & clear times on/off
    btn_next_inst_main2.reset()
    // setup some python lists for storing info about the mouse_inst_main2
    // current position of the mouse:
    mouse_inst_main2.x = [];
    mouse_inst_main2.y = [];
    mouse_inst_main2.leftButton = [];
    mouse_inst_main2.midButton = [];
    mouse_inst_main2.rightButton = [];
    mouse_inst_main2.time = [];
    mouse_inst_main2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instruction_main2.started', globalClock.getTime());
    instruction_main2MaxDuration = null
    // keep track of which components have finished
    instruction_main2Components = [];
    instruction_main2Components.push(msg_inst_main2);
    instruction_main2Components.push(btn_next_inst_main2);
    instruction_main2Components.push(mouse_inst_main2);
    
    for (const thisComponent of instruction_main2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_main2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_main2' ---
    // get current time
    t = instruction_main2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_inst_main2* updates
    if (t >= 0.0 && msg_inst_main2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_inst_main2.setText('練習はこれで終わりです。\n\n本実験でも練習問題と同じように\n真ん中の棒を左右に操作した後、\n「次へ」を押してください。\n\n「次へ」を押すと実験が始まります。', false);
      // keep track of start time/frame for later
      msg_inst_main2.tStart = t;  // (not accounting for frame time here)
      msg_inst_main2.frameNStart = frameN;  // exact frame index
      
      msg_inst_main2.setAutoDraw(true);
    }
    
    
    // if msg_inst_main2 is active this frame...
    if (msg_inst_main2.status === PsychoJS.Status.STARTED) {
      // update params
      msg_inst_main2.setText('練習はこれで終わりです。\n\n本実験でも練習問題と同じように\n真ん中の棒を左右に操作した後、\n「次へ」を押してください。\n\n「次へ」を押すと実験が始まります。', false);
    }
    
    
    // *btn_next_inst_main2* updates
    if (t >= 0 && btn_next_inst_main2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_inst_main2.tStart = t;  // (not accounting for frame time here)
      btn_next_inst_main2.frameNStart = frameN;  // exact frame index
      
      btn_next_inst_main2.setAutoDraw(true);
    }
    
    
    // if btn_next_inst_main2 is active this frame...
    if (btn_next_inst_main2.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_inst_main2.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_inst_main2 has been pressed
      if (btn_next_inst_main2.isClicked) {
        if (!btn_next_inst_main2.wasClicked) {
          // store time of first click
          btn_next_inst_main2.timesOn.push(btn_next_inst_main2.clock.getTime());
          // store time clicked until
          btn_next_inst_main2.timesOff.push(btn_next_inst_main2.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_inst_main2.timesOff[btn_next_inst_main2.timesOff.length - 1] = btn_next_inst_main2.clock.getTime();
        }
        if (!btn_next_inst_main2.wasClicked) {
          
        }
        // if btn_next_inst_main2 is still clicked next frame, it is not a new click
        btn_next_inst_main2.wasClicked = true;
      } else {
        // if btn_next_inst_main2 is clicked next frame, it is a new click
        btn_next_inst_main2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_inst_main2 hasn't started / has finished
      btn_next_inst_main2.clock.reset();
      // if btn_next_inst_main2 is clicked next frame, it is a new click
      btn_next_inst_main2.wasClicked = false;
    }
    // *mouse_inst_main2* updates
    if (t >= 0.0 && mouse_inst_main2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_inst_main2.tStart = t;  // (not accounting for frame time here)
      mouse_inst_main2.frameNStart = frameN;  // exact frame index
      
      mouse_inst_main2.status = PsychoJS.Status.STARTED;
      mouse_inst_main2.mouseClock.reset();
      prevButtonState = mouse_inst_main2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_inst_main2 is active this frame...
    if (mouse_inst_main2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_inst_main2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_inst_main2.clickableObjects = btn_next_inst_main2
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_inst_main2.clickableObjects)) {
              mouse_inst_main2.clickableObjects = [mouse_inst_main2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_inst_main2.clickableObjects) {
              if (obj.contains(mouse_inst_main2)) {
                  gotValidClick = true;
                  mouse_inst_main2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_inst_main2.clicked_name.push(null);
          }
          _mouseXYs = mouse_inst_main2.getPos();
          mouse_inst_main2.x.push(_mouseXYs[0]);
          mouse_inst_main2.y.push(_mouseXYs[1]);
          mouse_inst_main2.leftButton.push(_mouseButtons[0]);
          mouse_inst_main2.midButton.push(_mouseButtons[1]);
          mouse_inst_main2.rightButton.push(_mouseButtons[2]);
          mouse_inst_main2.time.push(mouse_inst_main2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_main2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_main2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_main2' ---
    for (const thisComponent of instruction_main2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_main2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('btn_next_inst_main2.numClicks', btn_next_inst_main2.numClicks);
    psychoJS.experiment.addData('btn_next_inst_main2.timesOn', btn_next_inst_main2.timesOn);
    psychoJS.experiment.addData('btn_next_inst_main2.timesOff', btn_next_inst_main2.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_inst_main2.x', mouse_inst_main2.x);
    psychoJS.experiment.addData('mouse_inst_main2.y', mouse_inst_main2.y);
    psychoJS.experiment.addData('mouse_inst_main2.leftButton', mouse_inst_main2.leftButton);
    psychoJS.experiment.addData('mouse_inst_main2.midButton', mouse_inst_main2.midButton);
    psychoJS.experiment.addData('mouse_inst_main2.rightButton', mouse_inst_main2.rightButton);
    psychoJS.experiment.addData('mouse_inst_main2.time', mouse_inst_main2.time);
    psychoJS.experiment.addData('mouse_inst_main2.clicked_name', mouse_inst_main2.clicked_name);
    
    // the Routine "instruction_main2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var risk_main2MaxDurationReached;
var msg_text_risk_main;
var risk_main2MaxDuration;
var risk_main2Components;
function risk_main2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'risk_main2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    risk_main2Clock.reset();
    routineTimer.reset();
    risk_main2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_risk_main2
    msg_text_risk_main = `${delay_text} の徴収について
    
    実際に徴収される確率は
    何%くらいだと思いますか？`;
    slider_risk_main2.reset()
    // reset btn_next_risk_main2 to account for continued clicks & clear times on/off
    btn_next_risk_main2.reset()
    // setup some python lists for storing info about the mouse_risk_main2
    // current position of the mouse:
    mouse_risk_main2.x = [];
    mouse_risk_main2.y = [];
    mouse_risk_main2.leftButton = [];
    mouse_risk_main2.midButton = [];
    mouse_risk_main2.rightButton = [];
    mouse_risk_main2.time = [];
    mouse_risk_main2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('risk_main2.started', globalClock.getTime());
    risk_main2MaxDuration = null
    // keep track of which components have finished
    risk_main2Components = [];
    risk_main2Components.push(msg_risk_main2);
    risk_main2Components.push(slider_risk_main2);
    risk_main2Components.push(text_val_main2);
    risk_main2Components.push(btn_next_risk_main2);
    risk_main2Components.push(mouse_risk_main2);
    
    for (const thisComponent of risk_main2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function risk_main2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'risk_main2' ---
    // get current time
    t = risk_main2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_risk_main2
    if ((slider_risk_main2.rating !== null)) {
        current_val = Number.parseInt(slider_risk_main2.rating).toString();
    } else {
        current_val = "";
    }
    
    
    // *msg_risk_main2* updates
    if (t >= 0.0 && msg_risk_main2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      msg_risk_main2.setText(msg_text_risk_main, false);
      // keep track of start time/frame for later
      msg_risk_main2.tStart = t;  // (not accounting for frame time here)
      msg_risk_main2.frameNStart = frameN;  // exact frame index
      
      msg_risk_main2.setAutoDraw(true);
    }
    
    
    // if msg_risk_main2 is active this frame...
    if (msg_risk_main2.status === PsychoJS.Status.STARTED) {
      // update params
      msg_risk_main2.setText(msg_text_risk_main, false);
    }
    
    
    // *slider_risk_main2* updates
    if (t >= 0.0 && slider_risk_main2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_risk_main2.tStart = t;  // (not accounting for frame time here)
      slider_risk_main2.frameNStart = frameN;  // exact frame index
      
      slider_risk_main2.setAutoDraw(true);
    }
    
    
    // if slider_risk_main2 is active this frame...
    if (slider_risk_main2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_val_main2* updates
    if (t >= 0.0 && text_val_main2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      text_val_main2.setText(current_val, false);
      // keep track of start time/frame for later
      text_val_main2.tStart = t;  // (not accounting for frame time here)
      text_val_main2.frameNStart = frameN;  // exact frame index
      
      text_val_main2.setAutoDraw(true);
    }
    
    
    // if text_val_main2 is active this frame...
    if (text_val_main2.status === PsychoJS.Status.STARTED) {
      // update params
      text_val_main2.setText(current_val, false);
    }
    
    
// *btn_next_risk_main2* updates
    if (t >= 0.0 && btn_next_risk_main2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_next_risk_main2.tStart = t;  // (not accounting for frame time here)
      btn_next_risk_main2.frameNStart = frameN;  // exact frame index
      
      btn_next_risk_main2.setAutoDraw(true);
    }

    // ★ ここからカスタマイズ：スライダー回答チェック ★
    if (btn_next_risk_main2.status === PsychoJS.Status.STARTED) {
      // スライダーが未回答(undefined)かチェック
      if (slider_risk_main2.getRating() !== undefined && slider_risk_main2.getRating() !== null) {
          // 回答あり：ボタンを明るくして、クリックを受け付ける
          btn_next_risk_main2.setOpacity(1.0);
          
          if (btn_next_risk_main2.isClicked) { 
              continueRoutine = false; 
          }
      } else {
          // 回答なし：ボタンを薄くして、クリックしても無視する
          btn_next_risk_main2.setOpacity(0.2);
      }
    }
    
    // if btn_next_risk_main2 is active this frame...
    if (btn_next_risk_main2.status === PsychoJS.Status.STARTED) {
    }
    
    if (btn_next_risk_main2.status === PsychoJS.Status.STARTED) {
      // check whether btn_next_risk_main2 has been pressed
      if (btn_next_risk_main2.isClicked) {
        if (!btn_next_risk_main2.wasClicked) {
          // store time of first click
          btn_next_risk_main2.timesOn.push(btn_next_risk_main2.clock.getTime());
          // store time clicked until
          btn_next_risk_main2.timesOff.push(btn_next_risk_main2.clock.getTime());
        } else {
          // update time clicked until;
          btn_next_risk_main2.timesOff[btn_next_risk_main2.timesOff.length - 1] = btn_next_risk_main2.clock.getTime();
        }
        if (!btn_next_risk_main2.wasClicked) {
          
        }
        // if btn_next_risk_main2 is still clicked next frame, it is not a new click
        btn_next_risk_main2.wasClicked = true;
      } else {
        // if btn_next_risk_main2 is clicked next frame, it is a new click
        btn_next_risk_main2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if btn_next_risk_main2 hasn't started / has finished
      btn_next_risk_main2.clock.reset();
      // if btn_next_risk_main2 is clicked next frame, it is a new click
      btn_next_risk_main2.wasClicked = false;
    }
    // *mouse_risk_main2* updates
    if (t >= 0.0 && mouse_risk_main2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_risk_main2.tStart = t;  // (not accounting for frame time here)
      mouse_risk_main2.frameNStart = frameN;  // exact frame index
      
      mouse_risk_main2.status = PsychoJS.Status.STARTED;
      mouse_risk_main2.mouseClock.reset();
      prevButtonState = mouse_risk_main2.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_risk_main2 is active this frame...
    if (mouse_risk_main2.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_risk_main2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_risk_main2.clickableObjects = btn_next_risk_main2
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_risk_main2.clickableObjects)) {
              mouse_risk_main2.clickableObjects = [mouse_risk_main2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_risk_main2.clickableObjects) {
              if (obj.contains(mouse_risk_main2)) {
                  gotValidClick = true;
                  mouse_risk_main2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_risk_main2.clicked_name.push(null);
          }
          _mouseXYs = mouse_risk_main2.getPos();
          mouse_risk_main2.x.push(_mouseXYs[0]);
          mouse_risk_main2.y.push(_mouseXYs[1]);
          mouse_risk_main2.leftButton.push(_mouseButtons[0]);
          mouse_risk_main2.midButton.push(_mouseButtons[1]);
          mouse_risk_main2.rightButton.push(_mouseButtons[2]);
          mouse_risk_main2.time.push(mouse_risk_main2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of risk_main2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function risk_main2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'risk_main2' ---
    for (const thisComponent of risk_main2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('risk_main2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_risk_main2.response', slider_risk_main2.getRating());
    psychoJS.experiment.addData('slider_risk_main2.rt', slider_risk_main2.getRT());
    psychoJS.experiment.addData('btn_next_risk_main2.numClicks', btn_next_risk_main2.numClicks);
    psychoJS.experiment.addData('btn_next_risk_main2.timesOn', btn_next_risk_main2.timesOn);
    psychoJS.experiment.addData('btn_next_risk_main2.timesOff', btn_next_risk_main2.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_risk_main2.x', mouse_risk_main2.x);
    psychoJS.experiment.addData('mouse_risk_main2.y', mouse_risk_main2.y);
    psychoJS.experiment.addData('mouse_risk_main2.leftButton', mouse_risk_main2.leftButton);
    psychoJS.experiment.addData('mouse_risk_main2.midButton', mouse_risk_main2.midButton);
    psychoJS.experiment.addData('mouse_risk_main2.rightButton', mouse_risk_main2.rightButton);
    psychoJS.experiment.addData('mouse_risk_main2.time', mouse_risk_main2.time);
    psychoJS.experiment.addData('mouse_risk_main2.clicked_name', mouse_risk_main2.clicked_name);
    
    // the Routine "risk_main2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographicsMaxDurationReached;
var demographicsMaxDuration;
var demographicsComponents;
function demographicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    // --- 変数のリセット ---
    t = 0;
    frameN = -1;
    continueRoutine = true; 
    demographicsClock.reset();
    routineTimer.reset();
    
    psychoJS.experiment.addData('demographics.started', globalClock.getTime());
    
    // --- 【修正】リッチなHTMLフォームの作成 ---
    
    // 1. 全体を囲む「白いパネル」を作る
    let container = document.createElement("div");
    container.id = "demo_container";
    container.style.position = "fixed"; // 画面に固定
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)"; // 真ん中に配置
    container.style.backgroundColor = "white"; // 白背景
    container.style.padding = "40px"; // 内側の余白
    container.style.borderRadius = "15px"; // 角を丸く
    container.style.boxShadow = "0 0 30px rgba(0,0,0,0.5)"; // 影をつける
    container.style.textAlign = "center";
    container.style.zIndex = "9999"; // 最前面に
    container.style.width = "80%"; // 幅広に
    container.style.maxWidth = "600px"; // 最大幅制限
    container.style.fontFamily = "sans-serif";

    // タイトル
    let title = document.createElement("h2");
    title.innerText = "属性アンケート";
    title.style.marginBottom = "30px";
    title.style.color = "#333";
    container.appendChild(title);

    // --- 年齢エリア ---
    let ageLabel = document.createElement("div");
    ageLabel.innerText = "Q1. あなたの年齢を教えてください";
    ageLabel.style.fontSize = "20px";
    ageLabel.style.fontWeight = "bold";
    ageLabel.style.marginBottom = "10px";
    ageLabel.style.textAlign = "left";
    container.appendChild(ageLabel);

    let ageSelect = document.createElement("select");
    ageSelect.id = "age_select";
    ageSelect.style.fontSize = "22px"; // 文字を大きく
    ageSelect.style.padding = "10px";  // 押しやすく
    ageSelect.style.width = "100%";    // 横幅いっぱいに
    ageSelect.style.marginBottom = "30px";
    ageSelect.style.borderRadius = "5px";
    ageSelect.style.border = "2px solid #ccc";
    
    let defaultAge = document.createElement("option");
    defaultAge.text = "選択してください...";
    defaultAge.value = "";
    defaultAge.selected = true;
    defaultAge.disabled = true;
    ageSelect.appendChild(defaultAge);

    for (let i = 16; i <= 28; i++) {
        let option = document.createElement("option");
        option.text = i + " 歳";
        option.value = i;
        ageSelect.appendChild(option);
    }
    container.appendChild(ageSelect);

    // --- 性別エリア ---
    let genderLabel = document.createElement("div");
    genderLabel.innerText = "Q2. あなたの性別を教えてください";
    genderLabel.style.fontSize = "20px";
    genderLabel.style.fontWeight = "bold";
    genderLabel.style.marginBottom = "10px";
    genderLabel.style.textAlign = "left";
    container.appendChild(genderLabel);

    let genderSelect = document.createElement("select");
    genderSelect.id = "gender_select";
    genderSelect.style.fontSize = "22px";
    genderSelect.style.padding = "10px";
    genderSelect.style.width = "100%";
    genderSelect.style.marginBottom = "40px";
    genderSelect.style.borderRadius = "5px";
    genderSelect.style.border = "2px solid #ccc";

    let genderOptions = ["選択してください...", "男性", "女性", "回答しない", "その他"];
    genderOptions.forEach((g, index) => {
        let option = document.createElement("option");
        option.text = g;
        option.value = index === 0 ? "" : g;
        if(index === 0) {
             option.selected = true; 
             option.disabled = true;
        }
        genderSelect.appendChild(option);
    });
    container.appendChild(genderSelect);

    // --- 決定ボタン ---
    let submitBtn = document.createElement("button");
    submitBtn.id = "html_submit_btn";
    submitBtn.innerText = "決定して終了する";
    submitBtn.style.fontSize = "24px";
    submitBtn.style.fontWeight = "bold";
    submitBtn.style.padding = "15px 50px";
    submitBtn.style.color = "white";
    submitBtn.style.backgroundColor = "#2ecc71"; // 緑色
    submitBtn.style.border = "none";
    submitBtn.style.borderRadius = "50px";
    submitBtn.style.cursor = "pointer";
    submitBtn.style.boxShadow = "0 5px 10px rgba(0,0,0,0.2)";
    
    // クリック時の動作（データ保存と終了フラグ）
    submitBtn.onclick = function() {
        let age = document.getElementById("age_select").value;
        let gender = document.getElementById("gender_select").value;

        // 未入力チェック
        if (age === "" || gender === "") {
            alert("年齢と性別の両方を選択してください。");
            return;
        }

        // データを保存
        psychoJS.experiment.addData('age_response', age);
        psychoJS.experiment.addData('gender_response', gender);
        
        // 完了フラグを立てる（EachFrameで検知させる）
        window.demoFinished = true; 
    };
    
    container.appendChild(submitBtn);

    // 画面に追加
    document.body.appendChild(container);
    
    // 終了フラグの初期化
    window.demoFinished = false;

    // PsychoPyコンポーネントの初期化（HTMLを使うので空でOK）
    demographicsComponents = [];
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}
function demographicsRoutineEachFrame() {
  return async function () {
    // --- HTML側でボタンが押されたかチェック ---
    if (window.demoFinished === true) {
        // フォームを消す
        let container = document.getElementById("demo_container");
        if (container) container.remove();
        
        // ルーチンを終了させる
        continueRoutine = false;
    }
    
    // ESCキーでの中断チェック
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // ルーチン終了判定
    if (!continueRoutine) {
      return Scheduler.Event.NEXT;
    }
    
    return Scheduler.Event.FLIP_REPEAT;
  };
}
function demographicsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics' ---
    for (const thisComponent of demographicsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demographics.stopped', globalClock.getTime());

    // --- 【修正】プルダウンの値を取得して保存 ---
    
    // 1. 年齢の取得
    let ageSelect = document.getElementById("age_select");
    if (ageSelect) {
        psychoJS.experiment.addData('age_response', ageSelect.value); // 選んだ年齢を保存
        ageSelect.remove(); // 画面から消す
    }

    // 2. 性別の取得
    let genderSelect = document.getElementById("gender_select");
    if (genderSelect) {
        psychoJS.experiment.addData('gender_response', genderSelect.value); // 選んだ性別を保存
        genderSelect.remove(); // 画面から消す
    }

    // ボタンの記録
    psychoJS.experiment.addData('btn_demo_submit.numClicks', btn_demo_submit.numClicks);
    psychoJS.experiment.addData('btn_demo_submit.timesOn', btn_demo_submit.timesOn);
    psychoJS.experiment.addData('btn_demo_submit.timesOff', btn_demo_submit.timesOff);
    
    // マウスの記録
    psychoJS.experiment.addData('mouse_demo_submit.x', mouse_demo_submit.x);
    psychoJS.experiment.addData('mouse_demo_submit.y', mouse_demo_submit.y);
    psychoJS.experiment.addData('mouse_demo_submit.leftButton', mouse_demo_submit.leftButton);
    psychoJS.experiment.addData('mouse_demo_submit.midButton', mouse_demo_submit.midButton);
    psychoJS.experiment.addData('mouse_demo_submit.rightButton', mouse_demo_submit.rightButton);
    psychoJS.experiment.addData('mouse_demo_submit.time', mouse_demo_submit.time);
    psychoJS.experiment.addData('mouse_demo_submit.clicked_name', mouse_demo_submit.clicked_name);
    
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}



var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(0.0);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text_thanks);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_thanks* updates
    if (t >= 0.0 && text_thanks.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      text_thanks.setText('ご協力ありがとうございました。\n５秒後に、自動的に終了します。', false);
      // keep track of start time/frame for later
      text_thanks.tStart = t;  // (not accounting for frame time here)
      text_thanks.frameNStart = frameN;  // exact frame index
      
      text_thanks.setAutoDraw(true);
    }
    
    
    // if text_thanks is active this frame...
    if (text_thanks.status === PsychoJS.Status.STARTED) {
      // update params
      text_thanks.setText('ご協力ありがとうございました。\n５秒後に、自動的に終了します。', false);
    }
    
    frameRemains = 0.0 + 0.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_thanks.tStop = t;  // not accounting for scr refresh
      text_thanks.frameNStop = frameN;  // exact frame index
      // update status
      text_thanks.status = PsychoJS.Status.FINISHED;
      text_thanks.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(0.0);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}



// ▼▼▼ これをコピーして、元の quitPsychoJS 部分に上書きしてください ▼▼▼

// ★重要：ここにGoogleフォームのURLを貼ってください
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSccFBHKsx9ggWQ7D3UTKKrU4lmowt4n9eN_6_0s2EzbPgE_KA/viewform?usp=header"; 

async function quitPsychoJS(message, isCompleted) {
  // 1. データを保存（念のためブラウザ標準の保存も試みる）
  psychoJS.experiment.save();

  // 2. 強制的にCSVダウンロードを発火させる処理
  const data = psychoJS.experiment._trialsData;
  let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // 文字化け防止(BOM)
  
  // データがある場合のみCSVを作成
  if (data && data.length > 0) {
      // 【修正版】全ての行をスキャンして、存在する「全ての列名(キー)」を網羅する
      // これにより、1行目(Welcome)にはないが2行目以降にあるデータも列として作成されます
      let allKeys = new Set();
      data.forEach(row => {
          Object.keys(row).forEach(key => allKeys.add(key));
      });
      // Setを配列に変換（これが正しいヘッダーになります）
      const keys = Array.from(allKeys);

      csvContent += keys.join(",") + "\n";
      
      // 各行のデータをCSV形式に変換
      data.forEach(row => {
          const rowString = keys.map(k => {
              let val = row[k] === undefined ? "" : row[k];
              // 文字列にカンマが含まれる場合の対策
              return '"' + String(val).replace(/"/g, '""') + '"'; 
          }).join(",");
          csvContent += rowString + "\n";
      });
      
      // ダウンロードリンクを生成して自動クリック
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      
      // ファイル名：data_参加者ID_日付.csv
      const participantId = expInfo['participant'] || 'participant';
      const dateStr = expInfo['date'] || new Date().toISOString().slice(0,10);
      link.setAttribute("download", `data_${participantId}_${dateStr}.csv`);
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  // 3. 実験画面を終了し、提出フォームへの誘導画面を表示
  psychoJS.window.close();
  
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px; font-family:sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #2c3e50;">実験終了です。ご協力ありがとうございました。</h1>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; display: inline-block; text-align: left;">
        <p style="font-size:18px;"><strong>手順 1：</strong><br>あなたのPCにデータファイル（CSV）が自動的にダウンロードされました。<br>（「ダウンロード」フォルダをご確認ください）</p>
        <p style="font-size:18px; color: #e74c3c;"><strong>手順 2（重要）：</strong><br>以下のボタンを押してフォームへ移動し、そのファイルを提出してください。</p>
      </div>
      <br><br>
      <a href="${FORM_URL}" target="_blank" style="
        background-color: #2ecc71; 
        color: white; 
        padding: 20px 40px; 
        text-align: center; 
        text-decoration: none; 
        display: inline-block; 
        font-size: 20px; 
        font-weight: bold;
        border-radius: 50px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        データ提出フォームへ移動する &rarr;
      </a>
    </div>
  `;

  return Scheduler.Event.QUIT;
}