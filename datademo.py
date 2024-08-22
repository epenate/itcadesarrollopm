import sqlite3

try :
    conecction = sqlite3.connect("repositorio.db")
    #conecction.execute("""create table productos(
    #    Id integer primary key autoincrement, nombre text, precio real, existencias integer)""")
    print ("Tabla productoscreada con exito")
    #cur = conecction.cursor()
    conecction.execute("INSERT INTO productos(nombre,precio,existencias) VALUES(?,?,?)",("PC DELL",1000,25))
    
    cursor = conecction.execute("Select * from productos")
    for fila in cursor:
        print(fila)
        
    
    conecction.close()
    
    
except sqlite3.Error :
        conecction = None
        print("Error en la capa de datos intentelo as tarde")
