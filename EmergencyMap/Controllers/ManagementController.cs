using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EmergencyMap.Controllers
{
    [Route("api/[controller]")]
    public class ManagementController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<User> GetUsers()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new User
            {
                Name = "Noam",
                LastName = "Vaisbuch",
                Id = "315358333",
                Phone = "054-5723066"
            });
        }

        public class User
        {
            public string Name { get; set; }
            public string LastName { get; set; }
            public string Id { get; set; }
            public string Phone { get; set; }
        }
    }
}