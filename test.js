import Dockerode from "dockerode";
let docker = new Dockerode();
let conatiner= docker.getContainer('5e15cfd6c8aa0de7845998ff2a806708eb4d756fb88f7f205c7b8075379315d2');
conatiner.remove();
