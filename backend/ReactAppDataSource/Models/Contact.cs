﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace ReactAppDataSource.Models
{
    public class Contact 
    {
        [JsonProperty("id")]
        public string id { get; set; }

        [JsonProperty("first_name")]
        public string first_name { get; set; }

        [JsonProperty("last_name")]
        public string last_name { get; set; }

        [JsonProperty("email")]
        public string email { get; set; }

        [JsonProperty("subject")]
        public string subject { get; set; }

        [JsonProperty("description")]
        public string description { get; set; }

        
    }
}
