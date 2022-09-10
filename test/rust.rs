struct Person<'a> {
    name: &'a str,
}

struct URL {
    protocol: String,
    hostname: String,
}

impl URL {
    fn to_string(&self) -> String {
        format!("{}://{}/{}", self.protocol, self.hostname, self.pathname)
    }
}

fn main() {
    let me = Person { name: "Sid" };

    println!("Welcome, {}!", me.name,);
    let app = URL {
        protocol: String::from("https"),
        hostname: String::from("app.rust-for-js.dev"),
    };
    println!("{}", app.to_string());
}
