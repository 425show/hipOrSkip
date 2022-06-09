using Microsoft.AspNetCore.SignalR;

namespace HipOrSkip
{
    public class VoteHub : Hub
    {
        public async Task IncrementHipVote()
        {
            await Clients.All.SendAsync("VoteUpdated", "hip");
        }

        public async Task IncrementSkipVote()
        {
            await Clients.All.SendAsync("VoteUpdated", "skip");
        }
    }
}
