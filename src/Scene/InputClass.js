import Phaser, { Utils } from "phaser";
import * as Initialize from '../utils/Initialize'; 

class InputClass extends Phaser.Scene {
  constructor() {
    super("InputClass");
  }

  preload() {
    Initialize.preload.call(this); //! ignore initialize preload
    //* start coding here
    
  }

  create() {
    Initialize.create.call(this); //! ignore initialize create
    //* start coding here

  }

  update() {
    Initialize.update.call(this); //! ignore initialize update
    //* start coding here

  }
}

export default InputClass;