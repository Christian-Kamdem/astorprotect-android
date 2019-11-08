exports.create = ()=>{
  const {TexView,ImageView,Composite,contentView,Tab,TabFolder,TextView,Button} = require('tabris');
  const copyright = require('./widgets/copyright.js').create();
  let actualPage = new Composite({
    top:0,
    bottom:0,
    left:0,
    right:0
  }).appendTo(contentView);
  actualPage.append(copyright);
  let slide1 = new Tab({title:'1',
    image:'src/icons/surveillance-video-camera.png'})
  .append(new ImageView({
        top:80,
        bottom:80,
        left:0,
        right:0,
        scaleMode:'fit',
        image:'src/icons/undraw_surveillance_kqll.png'
      }));
      slide1.append(new TextView({
        centerX:0,
        bottom:50,
        font:{size:20,weight:'thin'},
        text:'Vidéo Surveillance'
      }));
  let slide2 = new Tab({title:'2',
    image:'src/icons/facial-recognition.png'})
      .append(new ImageView({
            top:80,
            bottom:80,
            left:0,
            right:0,
            scaleMode:'fit',
            image:'src/icons/undraw_video_call_kxyp.png'
          }));
          slide2.append(new TextView({
            centerX:0,
            bottom:50,
            font:{size:20,weight:'thin'},
            text:'Reconnaissance faciale'
          }));
let slide3 = new Tab({title:'3',
  image:'src/icons/man-dancing.png'})
      .append(new ImageView({
                top:80,
                bottom:80,
                left:0,
                right:0,
                scaleMode:'fit',
                image:'src/icons/undraw_Moving_twwf.png'
              }));
              slide3.append(new TextView({
                centerX:0,
                bottom:50,
                font:{size:20,weight:'thin'},
                text:'Détection de mouvement'
              }));
let slide4 = new Tab({title:'4',
  image:'src/icons/cloud.png'})
        .append(new ImageView({
                    top:80,
                    bottom:80,
                    left:0,
                    right:0,
                    scaleMode:'fit',
                    image:'src/icons/undraw_going_up_ttm5.png'
                  }));
                  slide4.append(new TextView({
                    centerX:0,
                    bottom:50,
                    font:{size:20,weight:'thin'},
                    text:'Sauvegarde cloud'
                  }));
let slide5 = new Tab({title:'Go!',
        image:'src/icons/start-up.png'})
          .append(new ImageView({
                                      top:80,
                                      bottom:80,
                                      left:0,
                                      right:0,
                                      scaleMode:'fit',
                                      image:'src/icons/pp.jpg'
                                    }));
                    slide5.append(new Button({
                                      centerX:0,
                                      background:'red',
                                      width:150,
                                      bottom:50,
                                      font:{size:18,weight:'bold'},
                                      text:'Allons-y'
                                    }));
  let slider = new TabFolder({left: 0, top: 0, right: 0, bottom: 40,
  tabBarLocation:'bottom',
  paging:'yes',
  selectedTabTintColor:'red'})
  .append(slide1)
  .append(slide2)
  .append(slide3)
  .append(slide4)
  .append(slide5)
  .appendTo(actualPage);
};
