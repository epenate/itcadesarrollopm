# Inicio de la definicion de la clase
class Persona:
    def  __init__(self, ) -> None:
        self.Nombre = input("Ingrese el nombre de la persona")
        self.Salario = float(input("Ingrese el salario de la persona"))
        self.Descuentos = float(input("Ingrese el descuento de la persona"))
    

#final de la definicio de la  clase 

#Definicion de la clase hija 
class Administrativo(Persona) :
    Bono = 0.0

#Fin de la defincion 


#Bloque del programa principal

miPersona = Persona()


miAdmin = Administrativo()

miAdmin.Bono = 300



print (f"Estimado :{miAdmin.Nombre} su salario es de : {miAdmin.Salario} y su bono es de :{miAdmin.Bono}")

print (f"Estimado :{miPersona.Nombre} su salario es de : {miPersona.Salario}")
