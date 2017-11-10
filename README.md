
# Socket.IO-Client [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
This client program is a demo application for socket.io and what it can be used for. The library can be found [here.](https://github.com/socketio/socket.io)

## Description
The application pairs up multiple people and puts them into a chat room where they can send and recieve messages
with each other. Using the socket.io library we can open a TCP connection to continuosly check if there are any new messages being sent for every client.

We also use a few other libraries for a number of features in our application such as jQuery to simplify scripting in our html files. You can find this library [here.](https://jquery.com/) 

## Results
Here you can see the current status of our web app without actually cloning or downloading the project. This may be subject to change moving forward. Check out our [live demo](http://dalschedulebuilder.com/chat) for yourself!

<p align= "center">
  <img src= "https://i.imgur.com/zI9xnMc.png"/>
</p>


## Concept
This is an early concept sketch file of the application before we started implementation. There are various differences in the main version such as color pallete changes, and styles of certain features we decided to change for practicality and other reasons. 

The main features we wanted to include through developement stayed consistent, but as we make more and more progress we find the original design a bit too restricting. Thus, why they differ.

<p align="center">
   <img src="https://i.imgur.com/icepLhp.png"/>
</p>

## Recently Completed
* Animations fixes (Sent arrow)
* Chat bubble bug (width issue)

## TODO
* User name selection when joining (In progress - design finished)
* Socket heartbeat time out shortened (right now it's way too long)
