using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace POCSignalR
{
    public class MyHub : Hub
    {
        public void Announce(string message)
        {
            Clients.All.Announce(message);
        }

        public void GetServerDateTime2()
        {
            Clients.Caller.DisplayDateTime(DateTime.Now);
        }

        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }
    }
}