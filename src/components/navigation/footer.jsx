export default function Footer() {
  const year = new Date().getFullYear()

  return (
    

 
   <footer className="bg-amber-700  text-white py-4 items-center px-4 md:px-20 text-center">
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 ">
          <div>
            <h3 className="text-xl mb-4 text-amber-300">JobHunt</h3>
            <p className="text-white text-center md:text-left ">
              Your gateway to finding the perfect job. Connect with top employers and advance your career.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-between  gap-8  ">

         
          <div>
            <h4 className="mb-4 text-amber-300">For Job Seekers</h4>
            <ul className="space-y-2 text-white">
              <li><a href="browse_job" className="hover:text-primary-foreground transition-colors">Browse Jobs</a></li>
           
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-amber-300">For Employers</h4>
            <ul className="space-y-2 text-white">
              <li><a href="jobs" className="hover:text-primary-foreground transition-colors">Post a Job</a></li>
         
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-amber-300">Company</h4>
            <ul className="space-y-2 text-white">
              <li><a href="about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            
            
             
            </ul>
          </div>
           </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col  items-center">
          <p className="text-white mb-4 md:mb-0">
            © 2025 JobHunt. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
       
  )
}
