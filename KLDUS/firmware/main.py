import dht
from machine import Pin
import time

sensors = dht.DHT22(Pin(4))

while True:
    try:
        sensors.measure()
        temp = sensors.temperature()
        mitrums = sensors.humidity()
        print(f"Temperatūra: {temp}°C, Mitrums: {mitrums}%")
        
        if temp > 30:  
            print("BRĪDINĀJUMS: Augsta temperatūra!")
            
    except Exception as kļūda:
        print("Sensora kļūda:", kļūda)
    
    time.sleep(2)
