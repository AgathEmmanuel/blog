

compute
storage
big data
machine learning
network and security  


Storage
- standard  
- nearline  
- coldline  
- archive  



Bigquery public datset  




Data engineering for streaming data 

batch data
streaming data


scalable and reliable pipelines  


variety  
volume  
velocity  
veracity (data quality)  


sensors on road, point of sale data, etc  
alert underlying systems of new trnsactions in organized way with no duplicates  
make sure the pipeline code and infra can scale with those changes  
data need to be processed in near real time  
handle data that arrives late, having bad data, and those that need to be transformed  




Message oriented architecture  

ingestion  
data pipeline  

distribute event messages to correct subsribers  

ensure services are reliable, secure and perform as expected  

pub/sub  



ingest -> pub/sub [read/store/broadcast] -> dataflow [ingest/transform/output in elastic streaming pipeline] -> data visualization tool/explore  


you can even publish a pub/sub event from one topic to another  



Designing streaming pipeline with Apache Beam  



coding, implementing and serving pipelines  

points to be considered:   
pipeline code support both batch and streaming data  
pipeline code SDK have all tranformations, mid-flight aggregations, windowing, late data handling  



a poplular solution to pipeline design is apache beam  
- open source
- portable
- extensible  
- provides pipeline templates  
- SDK 
- modele representation  
- unified programming model to define and execute data processing pipelines  
- ETL, batch, stream processing  
- allows to create data processing pipelines  

but you need an execution engine to implement data processing pipelines  



points to be considered  
- maintenance overhead  
- reliable infrastructure  
- scalable pipelines  
- monitoring pipelines  
- vendor locking  


Dataflow:  fully managed service for execurting apache beam pipelines within google cloud sytem  



