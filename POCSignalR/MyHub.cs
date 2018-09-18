using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace POCSignalR
{
    [HubName("ChatHub")]
    public class MyHub : Hub //INFO:  we need a hub deriving from "Hub" class
    {
        [HubMethodName("announceToEverybody")] //INFO: recommandation to use camelCase notation for naming,  so it will be less confuzing on js side
        public void Announce(string message)
        {
            Clients.All.Announce(message);
        }

        //public void GetServerDateTime2()
        //{
        //    Clients.Caller.DisplayDateTime(DateTime.Now);
        //}

        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }
    }
}