using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalRDemo
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }

    public class SimpleHub : Hub
    {
        private static int _id = 1;
        public void NewMessage(string message)
        {
            Clients.All.newMessageReceived(message);
            //Context.User.Identity.Name
        }

        public void PersonReceived(Person person)
        {
            Clients.All.newPerson(person);
        }

        public void NewUserConnected()
        {
            Clients.All.newUserConnected(_id);
            _id++;
        }
    }
}