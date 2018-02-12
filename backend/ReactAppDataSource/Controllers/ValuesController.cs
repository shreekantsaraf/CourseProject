using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactAppDataSource.Controllers
{

    [Produces("application/json")]
    [Route("api/Values")]
    public class ValuesController : Controller
    {
        public class vals
        {
            public string id { get; set; }
            public string name { get; set; }
        }
        public List<vals> _repo;
        public ValuesController()
        {
            _repo = new List<vals>() {
                new vals() { id = "id1", name = "name1" },
                new vals() { id = "id2", name = "name2" }
                };
        }
        // GET: api/Values
        [HttpGet]
        public IEnumerable<vals> Get()
        {
            return _repo;
        }

        // GET: api/Values/5
        [HttpGet("{id}")]
        public vals Get(string id)
        {
            var one = _repo.Find(x => x.id == id);
            return one;
        }
        
        // POST: api/Values
        [HttpPost]
        public void Post([FromBody]vals value)
        {
            _repo.Add(value);
        }
        
        // PUT: api/Values/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]vals value)
        {
            vals v = _repo.Find(x => x.id == id);
            if (v != null)
            {
                _repo.Remove(v);
                _repo.Add(value);
            }
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
