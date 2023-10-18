import '../components/Work.css'

export default function Work() {
    return(
        <div className='work-container'>
            <div className='work-title'>
                <p className='text-large blue'> Work Experience</p>
            </div>
            <div className='vl-work'></div>
            <div className='work-text-container'>
                <div className='work'>
                    <p className='text-normal blue'>Back-End Developer at BildHistoria Association</p>
                    <div className='work-description'>
                    <div className='work-description-info'>
                    <p className='text-small gray'>LIA/Praktik</p>
                    <p className='text-small gray'>September 2023 - December 2023 </p>
                    <p className='text-small gray'>Stockholm,Sweden</p>
                    </div>                                     
                    <p className='text-small gray'>In charge of migrating data from the old database 
                        SvenskPorträtArkivet to the new database that will be 
                        used on the new website Bilhistoria.se. Data cleaning 
                        and pattern matchning are some of the tasks included in 
                        the migration plan.</p>
                    </div>  
                     <div className='work'>
                    <p className='text-normal blue'>Machine Operator at Pålgård & Sönner Kran AB</p>
                    <div className='work-description'>
                    <div className='work-description-info'>
                      <p className='text-small gray'>May 2018 - August 2022</p>                   
                       <p className='text-small gray'>Stockholm,Sweden</p> 
                    </div>                    
                    <p className='text-small gray'>Driving wheel loaders, traverse 
                    driving, sampling, maintenance of vehicles/machines/facilities
                     as well as directing fuel conveyors are, among other things, 
                     the main tasks that were part of the job.</p>
                    </div>  
                      <div className='work'>
                    <p className='text-normal blue'>Warehouse Employee at Svensk Freon Återvinning AB</p>
                    <div className='work-description'>
                    <div className='work-description-info'>
                        <p className='text-small gray'>May 2015 - May 2018</p>                   
                        <p className='text-small gray'>Stockholm,Sweden</p>
                    </div>                    
                    <p className='text-small gray'>Various duties within warehouse: handling of 
                    refrigerated furniture, freon/oil/glass recycling, truck driving.</p>
                    </div> 
                    </div>
                       <div className='work'>
                    <p className='text-normal blue'>Online IT Support Technician at Comodo</p>
                    <div className='work-description'>
                    <div className='work-description-info'>
                        <p className='text-small gray'>August 2011 - June 2013</p>                  
                    <p className='text-small gray'>Iasi,Romania</p>
                    </div>                    
                    <p className='text-small gray'>Troubleshooting, optimization, virus 
                    removal, program installation, help with computer and network 
                    configuration were among the main tasks that I had to do remotely for 
                    customers all over the world.</p>  
                    </div> 
                    </div>
                         <div className='work'>
                    <p className='text-normal blue'>Onsite IT Support Technician at GimRom Holding</p>
                    <div className='work-description'>
                    <div className='work-description-info'>
                       <p className='text-small gray'>July 2008 - July 2011</p>                  
                    <p className='text-small gray'>Iasi,Romania</p>
                    </div>                      
                    <p className='text-small gray'>Troubleshooting, optimization, installation and maintenance of 
                    IT equipment for a grocery store.</p>  
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}