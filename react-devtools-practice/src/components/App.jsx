import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTERIVFRUXFRUVFxcVFRUVFRUXFRUWFhUWFRUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEHAP/EADoQAAEDAgQDBgQEBQUBAQAAAAEAAhEDIQQFEjFBUWEGEyJxgZEyobHwFMHR4SNCUmJyBxUzgvGyFv/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAAEEBQYH/8QAMREAAgIBBAEDBAECBQUAAAAAAAECEQMEEiExQRMiUQUyYXGBFJEVI0KhsTPB0fDx/9oADAMBAAIRAxEAPwD1rSvPm44WhQuyBaoWQc1QsE5qtEBOYrIDcxWmUCcxFZAbmK7ICcxWQE5ishAtV2UQLVdkIFqshEtVlEC1XZCBah3rdtLrizmgIrKo4WqWQiQrKIEKyESFZDhChDhapZDgYqlKlZaVsaOBAEcfzlec/wAXnPKn1FeP/J0lpIqD8sK9rQA3cWXMyZZZcjm+LNmKG2KXwTdTY4gECILoS981zZOUhPuqf9AT98/kvk9BXpDz5wqFoiVC0QIUCIEKEBOarIDcFCAnNVkBuCIgJwVkAuCJEBOVlECrIRKsogQrIRIUshEhSyiJCuyHCoQgQrIDKshxQlEVLJR9CpySVsJKw9PCOm4jzXOy/U9PGNp3+h8MEmxvEheXi1bo6uL4YpjbNkH7hNx8sbBsrG4wyT0hafSVUE0R/FI9go9TC7Z54+KshEhUWRIVFkCFAiDmqFgnNV2QRqYgtdpcwxwcASPXksi1E4TcZx4+UaFhjKNxf8MK5q2JiGgT2orKF6xAElRySCjBvoz2K7RM16KQ1u6GB7pii63PhDViV15Fcw7RtpiLF3TYevFTHGeTpcBPFCHbKN/bOoDs2FsjpuOzPLJC+iyy/tjTfaoC08xcIZaeUeik4S6NFh8Q14lpBHRZ3a7JtCFqllUQIVNvii0iBCKyqIOCtMoi2mTPS5SsudY3FeW6QUYXZFrRxn0RZXkr/Lq/ySKj/qOEXsIV41JRW52yPl8DWDpeISPvguZ9R1CeCSxtX5/Q/FDnlDlV4XmEmb4xYs6rYhNUebHKHkrsW/wkHktONc2aEvgpKr1tiimLfi280/0pfBl9RHtYW84BwqEFn4oXi562HusD+o4m3GL5Xzx/uOWJ+RX8eZ2tK56+ryvmPA70OOw1HES0k8D/AOLbpdap4XkyPp//AACcKdIKDIkLcpKStAdHCERAbmqFg3NVkF6xi6GeTaMhDcea9r+0xc406bobsY3PmtmlwbvdMZlmsa2xK7KqjKbC9z2mo4fCTcBHn3TkopcBYajG75KHMseXEzZbsONRRjzZXJla560GawmGxADml2wInym6GabTotPnkvcDnXclrqTjB/lMWEkXjjb2hZPTlO1JfyafUS6PRcnzBlemHsPmOIPJYpJxdMY1xaHnMVWBQJzVZQNzVZCItI5pc8UZyjJ9x6CjJpNfJHSmWDR3u4hZo51lnKEfHkc8e1JseYRuOK8pnxTxy2y7N8ZKUVQKrSPBBGS8jozXkQqvjey0RV9GmKTQtjKg3ngm44lpUUbGa5Hotze3kHgY/AD+n5KvXl8mfbH4PYAuoeeA1yQdwBH2Vj1E3CVuSUa6/wCGHEoqtTdeVUTpRiLDFXTPT4HPFwdNcnwt4wI6yjxwk/avJPTSW5+DRUqcNA5ABepxQ2QUfg5MpW2yRCYVYFrwZg7WPRLhkjK68DGmuzjwjsiML/qDnxpNGHpf8tTeN2tmPclHpMHqz3y6Q1y2LjvwZ3KewlV7RUrGAbwujPUxjwgI4r7D47sowc581UcrGOCMhneVup33HP8AVasWS+DNmx+UUhfC0mUiXKiHWVVC0zVdkc37l4OoaTZzbz0I9/qsGqhu6XJtwPw2erUiCARsb+650ZWHONHHMR2LoG5iuyUDLVL5JR8xgm+yRqZZFjfp9hwSvkFKck9v5K8jTXNjwkDoV5nU49TJ/wCZcl8ro3Y3BAq3ecFljs8mqPp+RGqyobEg9CPzWvFi3fZFjXPHDnopszwdf+WAP7dUrpQw+mt0kKedSdRY3gMtfTJ1XkC/XiFhy54zjwEux3ukHBR6OF3zzZX4yk4kmJC839Q0ueeZzq14NWKUUqKbGW3ELDGDj2dDFz0UmJeRwP5H1W2ELVm+FNGm7PYAaG1XXcRI5AcI6rq6TSxilN9nI1uobk8a6/5LpbzAcIVFgu6E6ovzQbIqW6uQ9zqgGOqBrCTwBPtdVN8B4lcqPNuyeFONzGpWqXaw2nbw2A++a6TXpYYwRc5e5y+OEb7Na8WCyxjbCxqlZmsW6Vqig2ZzOcMHNIITYumC1aPNcdT0uLeRW+LtGCcaYqH/AHzRizoIKhBnDvIQSGxs9O7J9pm921lQwW2npwXHzaeUZ2ujpRnGceezWUcfTf8ACZSegHBhieillbQZCptkqiDgiTKoE9vFIeqxqfpt8hLFKrIt3nqmTxRjhcErVdAqTcrHatdsW3XntP8ATszmnkVLzyaXkoRK9IuEZ+z5jJ91h1mshjWxq7XgfixN8jFWlbzXnIyNkZicLXYR6CF6M86Rq0w4QRIS8uKGWO2atFxbTtCwy+mL6Z8yT8lmhoMEOdo158j8nMbgWVGaHNBHC2y1bI1VFQySi7R3AMDWBosG+GOUbIkVkdysYVgkXC28IJJtNLgiZyFZZTdpqkUXDoUuT9yNelVuzDf6dZ1h8NTrOrv0kvcBYkmD0C6WeMpSVfAtw3R/ktXdo6OIce6dPoR9UGxwXI5JVwV2bZh3bSYJPIcUyLI0ZTE5ziXmG02NH95P7Jy2Ltinv8IzOdMfq1P0yf6Zj5rTikn0Z80X5KlycZzisonTcQqZaZc5ditJBSMkbRqxyo9EyXOB3eotGnmOC4eaNZNt8nUj7o7i5bmrIkPHqVWxoXts7/u7OJCLawXA5/uLTt+iaoi3EM2vPBJjghCTlFcsjbaolKOU0kUoMloKx/12O++BrwOrOCmTw90WTXYYVbv9AxxNjQEgEQvNZbjNp/x+jWnXYOrW0qowtjIQ3MT7xPobsN6HhekUkeb2s4RJBmwmyBxk5qV8LwTxR1zwN0U5xitz6Ik2K1Mc3gudk+q4knt5Y5YZMHhMUHOPCeHUft9E3Ta6GZ7emFkxOKJVMbBiLbLLm+qqGTao8L+5UcNqw9OoHCQulhzRyw3IXKLTo+1X2tzVqbcmq4XklcGe7U1Yb8ve35oXzM36RcM8g/3WrR7ylSZJNRziTyMLtrHGaUpPwKeRwuKXkueyrqrqrO8pjxOgFvnBkbhJzwio3FhY8jd7kXvaTC6ajmN2BKrGrRN3FmBzXLaxeSSQ24geW/1+9tUHGK6EzUpPhlbjcscANJe7wy/UIAP9vROU0KeOVFVUpxZOTsQ40ChELo6AoQYoVIQtBxZbYfGOaBcwetjFlnljjKX5Rrjkkl+B3D42ePslSx0OjkstaOYadgszx35Hbki1wWagwClyxOJLTNBhavqEickybGWeHpTcj1/ZcLX6hL2Rf7GrjsLVqhon0XLUXJhxg5OisxeMvY2WrHj4NUMaS5O4bEku3RTitjtcgzx8DGMeDZIxpoHEmuRGU+h/JsRWXZ3HD2ExioVSzKCtsD0gFfEkzyXE1WtlkcoL7RsMSQm+pIWFKmPUaYBmJ0uDuR/9WrBJ45qSGyx7otB3YkTPr7pEk5Nt+RaxcUWWAEMHWT7r0Ohi4YUn+zHm5mw5etdi0jMdr3/wnen1Q4+ciN+nVRZhsmwrKlZwe0HZ3qbfkF1E6iipLuj0bIsuo0v4mkAgE+UBInK3Rnzbmtq8mXzCtqeXHiVqiqQbXggKYKKwVEqM9Y3u3COEe6uL5D28GLz7BeLU31/VPxT+RGbH8FE5q0pmNojKIWdUIFp1jzVNINSHKdYpbiOUh+jizxJPC90h40uh6yN9jmHxMFBKFoZGRq8qzUQBuuNq9M5c3RtxTRfYfHuIhrXH2EfNcfUYY3ukxyjFuyGJxsfGCEmGG/tHxilyisdi2vqaWE87iPsLXHDJR5J6i8lhSfoBLbnmqWnhkltchWTI6uuA1LGlzbW5qP6ftl7mLWVPlI736Z/SQK3yNFrV7jNR80rl67NupRfBTQKo4rEkg4pCdSp8k+MTRGNCb6xg+qco9GhQXAfAS4x/LafRMx4d8uRWeorjs0FLFgi3Cy6sci8HLlia7IOrqbwlAy3a3EyxwWjSq52aorbjM32Ynvp5sPycF0JuuAEr5N2zCvrMc0O02334zHySJIF5FB8oxr8vqNeZeSJ+4WmEXQM8iGnOgI2DFlNnFTw/9m//AEFcewm+CjxzZPomIXLkpq+C1XCbGdCJY7KZ7rkclqiY5dnwciBJgqi0wrHKmg0xujUPmlyiNi2h6iWnax5FJlaHRp9FlhKhaVnnFSQ+LcTU5ZjpgFcjU6dUbYZC5ptadxM+q5jWzofbZFmCY06mtAO3pyVxzvplOJypTjYbpmPbdgyvoVw7onzK057dAQR9+KHNVskTcadtRYNzTAcRoNtcrkZZqU7iqE3zwLVanNXFfA6MfgTqOCdFM0RTKvGVdJ3sVrxx3L9D1+RnLaT3Qbhu88x0/VMUH14FZZxX5ZdhwaIbYJ3CVIxU27ZA1UUQ9hj+0NfUSB0+/muppo0ky8nwCyUaK9IcCzxf4uJv9ChzZUouT+S6aVL4NRmr8S1rmYYNGoXe52kNHOYJ9keNqStikoyabVmExBxAfPeNLuPjc8H3aFsg1QWSHzQ9h3VI/iRPQlWzNx4K3Onw0Hk5v1R4+ypdFHnGL0scRubBNhG3QvLLamykc+r+GkAxPxTfT+nBH7PW7/gzOU/S/wC5SsK2mOxppVFk2hQII0qmGhqi8cflulyQyLGBHA/fkgtjFQ5QrkWKVKCfQ6M2jSZQS6mXxIaYJG7eUjkuVqZqGTZ5Ztxe6NlxhsY4C1x0/RYcuGMu+B8ZMsKOIm6xzxVwMTO1K0SSjhjukimymdjgGkcySuk8DckxG9UJ/jTyC0ekvkDczd0n7TsvN5Iyaddmh9cD1osbLltO/cjP+yvxuqZFvXdaIKu0asVVyLUsJUqHkOJIHy5rVjgn0MllhBFVjskxAdJIe0TEG/PYrapY4qnxYv1d3RpaDhpEbQEEhVEpQeSUAxtSGnyTsfLQUUZGr4neLjLj0aOPrFvNdW9q4A7YLDZjFcuttpHIe/BI1OncsO3+QoyW7k0nZrOm1icPVIDwPCf62jh/kBw5eRUxwlCKl4EZmlLgFmeX0mOOldDHyuRMmyoxVUDijKSMzneODmlovt8imY1yVk6MxmVQlknotWNe4yZn7Rx+ZN7iLbR8Unbz+ysfoT9axvrQ9KjLgrrHMDsPFSiw7DOyoNEw5UEgzHIWGmMU6nNA0MixymQUp2OTRdZVmNSi17WgEPEGd+Vlz9TpceecZS7RpxZJQVB8LiDuHx7IcmNeUMjJ/JYMfVdcVI/6hZn6ceHEatz6Ytin1BZ7ifW3sn4fTfMVQE9y7A16oDd7psU5SBk0kId6tO0RuPU6I2Xkck1K0joJcDLShiymFFO4JCU8mNytvkDdxSCF8J2LJGVqPgBKyDnptIJRAHmrDBklVSDFscfDf25pmLvgvwZPOcQGy0fE67unJq6uCG7nwuhOR1wUIdxWpoUmL4iu5jg9pLXAhwIsQRcEJmOKap9Cps2OUuq4nDGu9wDtbmwBAIaBfoZn2WLJL08npx6HQamrZT47DOO5JTIyZJRXgqsRhrELTFiJIzGYHwx/ct2Nc2YMvVFWXWjrP37pyRlfRCERQSm6FCIPHJUEEZU5qgkwzQEIaCtQsYhqix3BKk0NimPUahCTJIdFtDtBxOwSZJLsbFt9FpTzJzRBCxS0sZO0aFlaXIcUHOpurOIa0bF38x5AJbzRhkWKKt/8F7W47mUdUkmN5XUjSVmSTsl+HVeogdh6tSw5iV4uWogpNHS3oOxwAjismSTlJtPgW1bs6MQl7CenYCpXvZdDRQpMLa4pEDVWl3fDCo41yNtEomY3KFc9F8lHnWZhlm3dwHHzPJb9PgcuX0VKW1GKxZJJJMkrrQpcIyyvyCA2HqVb+SvwKVWOqPDWAlzjAA3JJsmxahG2LktzPU6GAGHwtOjxa2/VxOpx9yVx1N5MrkaIJJGdxjVtigWyqxDE6IpmHzlsPI6yuhhfBz865KlwWgyEYUKOyrIGpVOBVNBJhSEIR1pVBJjDHoWNTGqNaEuSTGxY2yslOIxSH6LakbO2nY7c9lmlPH8o0RjIm1wG5/NW7ZArsQ58N1FwGwJOlvpsECxRg3KuS3Jy4JEtZsZO0+e5VrdMp0gfeu5/Io6QFs9da6F89as21YliKvi6J0I8GnHDgWOI38k1QG7AtHZaMPttislNnznpyV8gnxrAboowciCuJxTnC3hHPj+yfCCi+SkZvMmgeZ34k+ZXQwty7FToqXsO5t+S1JimjlCg+q4UqLC5zuQuf0b1Kjkl7pMF9G+7OdmaeEHeVSH1iP8Aqydw3mev2cWXNLLwugYq+iea4rUjxY6GPhUUOJC1RFsqsXsUxAmFzgeMrdh6MGfsqnhaEZWiBCIBkCoUSChYanUQtBphx0/dUESb0VMOLGKb+aW4jUxqmUtoYmXNPPKopd0DbaeOnkue9Bjeb1X/AOv5Na1Mtm0QbUlbaM92MU60CyBxsYmOUMM43Ijqd/8AqEmeWK4sZGDY9/tDv6Xe4Wf+qj+Bnpfs9IdVa4WPzgrxjxTg+UaY2mV2JO6dA2Q6K6lUJqBnOfYXWtQuNknOi3Ftle1SXJmYJ7+AufkE5RSXJBOpPP8AdaY0CwVarAVqPNl2VwwVWsf4dMu6mzR6lNlqMeFe90LkGpdmgCDiKsDi2mJPlqdYeyR/ikX9kWU4Sa4NXlzKNJhGFYBzO7j/AJE3KZHIsrtsU8bX3C+J7x24K1x2onJVV2HiCnKgHYhWCNAlVi22KYijH5xR8S1YnwZcqKV7VqTMckBhELIlqsoiFCEgoQI0oWGmHZU5qg0wzHIWGmHplAxiYdrkAxBaYkoW6LXJa4KlpINvPeFlyS3I0QjTNLgqABkmeq5WXJfCVG2EfJY6Gpdv4LpFgx2ywtSt30MTGS6d1nWJRYaAOwrS7UBDhxH5pyyUqK7GGNQb+SUCqmJ6rTFKVMF8CjpNmj1T+FywaH8vygOvU25c1zdTrmvbAHJkUVS7HsfX7pvhAHACOSw44vI+QcUd75KTGE6dW8nb9I81txLmh744K8Ylwu2xWuDcZWgHyhzC5k538xnlK6+GWPIuuTJk3QDPxD+ZWj0ogeoxSrUKJQom9lXiKNz1RoEqc0y1rmk8QjjJplSimjEYujpcQtsHaMGSNMTc1NQhoiFYJxzVZREKEJhCETaVQSCscqDQdj0LQxMaY9LaDTGaQ5JcmNRZYJ4sHDj5LPki+0Pg/DNHhaJYOJEcyuVkyKfC7NsYuIz3jfuUuphXEtqblkmFEKKiBL5CYxSqwCOaTkx7pJolHASmcFnHUNSOOTaVQbBYHxeK/FL1WpqHAuT2rguXEAcrSellxVbZm5bKCm7vauo2Y0wSLTHU810K9OFeWa37Y0uylx+LDnkD4WtAb0PmeFytmKG2N+S2hJrySRf06p1cAgxVIeQbHccExe2pRYLSfDLbCYrVZ1j8j5Lp4NSp8Psx5MTjyug72LUKAVKKsqxLE0JCgSZie0OC0umLH6j9votGKXgTlj5M5UatSZjkiBajFsioSj4tUIfQqIdCotBGqg0Fa5QJMPTdyQNBpjeHrQUuUbQ2MqZZNqAj6LPtaZotMtMDj+Dlky4L5Q+GTwx78Uzl9Fm9KQzfE0jYXIlJs1JHQr3cUXRIvhFBXwC+AjasCSptt0iWNYV03NhwH6oMiUOiO2WmDZIJ4/muVqZvckzPldOhXMiWsdffkYN+J6fqphSckHjpyRUPaKdMzZxFhxJO0iVsj75fg0XbpFVi2aXwbuIkx/Uen3utWN7lwVKkVmJJY6TO+kwQbjcWWqK3KhVnMzqXbUEzN5M7kq8S7iRjrfFtfZ1uvGeaVyihuhjYs/35ef6rfg1nif8Acz5MHmI4b3C6Kd8mVi9VisiKPOsBrYQN9x5jZFGVOwmrVGAxdGDt59CNwtkZGOcRQtTUxDREiVYJxQh1UWdlQhwKEJAqi7C03qmg4sbpuB4pbscmmh4s0tB1sM3hrtRH+UWHkbpCnvk1T48vge47VdhadVU4kUrDd51Q0HZvW1F5qUKR01IJrS6CJAolaKfJN7pA6GUWP222R8jFOrwH3KHJHi2Wi/aIaBx+pXBlLfNyMr5k2U+Y15DW8zc+R4LXhhTbNWONNsC2gHVNvC0Am8xaYlG5tQrywt1Izmc4nU8kbHjy/wAY5c10dPDbGhcuSoxLyWeUfI8fda4fcL6G3t1UiL7CLcTz++CUntmF2CwOLJaIJBGw4RJlMyw5ARZu26xufK0hZaDDUKhbtx/l6p+LUTxPjr4FzxRn2NNqh21jyK6uHUQydd/BjnilDsFUZKeCYztPgQHahx3/AFTYTrhgTjfJmK1JaIzM0oizgnIQ1RzVzVkD4SgHu062ssbvMN8p4JWSbhG6b/QeOG51dECxGnZTjREtVlUfaSoSibQqLSCMKFjEGbUVNBWGZV6pbQaYXvihoLcekSvLX8nZJh8bqmrdoskaogRvxKqpXyS0dY4byqbd0WNUnQ9sjdzfqhm1LFKvyR9F9iHeIGYE6W2nzK4uNeBUFw1/LKWgA+p4QbWuZkk7jkP1W3I9sOTSuFbGs6cKdMtG53SNOnOdsXjbk9zMZjp3K7WMjQrWgggRtEgyJj6pytMUSy2pLHA7258PviqzKmSIHDVms1S2TJ32In5W+qOUXKirLDL64MWBjeTvvv8AfBJyRplplmNNovsPI2FzsUimXZ1jRebcBIMzym0cUPK6J2AfUcPu/wC66WDW/wCmf9zPPAu4lfi2Cq4wJho+c/onarLW2mDih3ZnMxyst2Cdg1V8MDJh+CgxVAtXUxZVI5+TG0LESniDgUISBULsmFCzhCoh8oQ6CqCQQKgkP4FlJ1VocSKc3JgGIm8HnZZ80skcbcV7h+NQc6fQKUVMr2npjD1XlZ92duPR3WNiq2urRLXk454mE1RbVg7lZwvhDssuy2wjjUq09QGq0dYkysM1GGGe18Fy4XJc45w1tbwA+q5mL7WysKexyBZXhNGpx5mEWfJuqJead1FFXm7tRJOwWrTrah0Y1EzGZvt9F08C5FTKylUIhs2JmOuy1y5ViidF+h5HA/mgkt0bIuBXMhD+QcnYeY/oCfYTBVNJG/5wqyKy0y8o1pAF+INzDuscFilwEhyl9d+vmkSbDSQU9SfW4vvYe/oq3EoiKbf5QJcYJED6b+qZJt8NgIVxmEB35cusIozcSVZmM5y2xtcLp6bUU0Z82K0ZBwgwvQRlas40lTo6QiKOAKEJNULDNEoQkg+Ey59QkNGwknkk5tRDErkMx4ZTdIs+y+R9/UOv4Gm/U8lh+pa70YJR7Zp0um3yuXSNxi+zdF9ItDADFiOC85i+oZYZd1nTlp4SjVFA3sgzR8ZL/lK6j+sT33XBm/oY7fyV/wD+cq9Pda/8TxCf6KZr2uJ9dlyKSR0LbJd2NzuFTm+o9F7fLItfJsETjsRSdsJUA5XSYSkG0jQdmKAJdU5DSPM7/L6rma+bilD5E558JDTmaqqzpqMByltxjOMdpbASsat2xWJbpWzNZnY6ZvuV08HPJtu0ZbHVNT44D6rqYlUTPLsVqN48k1MBnMWNnBXD4AYtmFSWtPWE3EqbQE2Cw9S8opx4KTLfDVlknEYmWNGus0oBpjIrJe0siK5+EEQTxtvaZ4cPZMiuOSpA317TIuZsI2ACNxBj2V+YVAWlMxRaZJdGBzFsPK9NpncKOJqFUgFM8FpEInChZJoVFoPh6Zc4NG5IHulzmoxcn4DhFyaR6Rk+Uso09O5O5Xj9Vqp557megw4I440O5bhGUhAgCSfdZ82WeXsOONR6G8XixpIBSceN7rYZT9+tmwol3ym0EJWpRGkz5cEzHkUk9yAcfgiDzVppdEqybQ0Xm6rJKTdUXGKRCoeRVQquUR/g22U0u6oNbxjUfM3/AG9FwNVP1czfjozNbpDGHpwJO5v6cEqbt0XOVukJ4+tpBPHgE7FHdwaMUL4MtnFTQ0k/EbrqaeO+VLo0TfBm2DiV0mZ2cqfCVcewWRbdsdFb4YBV498NHn+RWrEvcJyPgDhn+6OaBiyzw9Tms04jkxttdJcArDMxKB4wkyNXFkXESL3vdFCBUmfVcSL31bXmb3n3390bgBBldi8TYpuPHyVOXBlMe+SPVdzTKkzkah8oWBuFpM4cKgwtGkXENG5MBBOSinJ9BRi5OkX+TZTUbiGCqNJHivsY5LlazWQnp3sd3wb9PglHKtxtK1S687GJ2RLFYgxvtyT8cFZUhE4oxvyTvTQG4lhXFx6qTSSKRZ/hv7gsvqfggsytfdaZQ4FqXIWidRiVUmoRuiRW5n1R0cZVRbmHJbSLao1DzE+XFRxkogNo9BHif0G/5BebftiC/bH8hMRW5IIRBhApsbUDJfVO2wW3FFy9sEbYviomIzHHGtUJ4cAu5hxLFGvIEmLvcjSFtgsS6Go4LkCXRCg6yuSAKrND4gOpK14OrE5XzRygY81clZENUnpUkGg3eoNoVnWVeKpxLTJ6/mqSKYN7+O35BFRRVZjiLLXhx8mfLOkUVV8mV1oR2qjlzludnCjBGGqhiCt+YVNWqZaNr2bztlUCnXA1t+F3E+vNea1+hnhbni6Z19NqFNbZdmhq4WfgPouVHJX3HQRVYqg4TIK1QmmVIqNRmOo+q27eLM+7mi3y2iQNThHmsWaSbpDF0Md+OaDYyt5W06TjJHBbpZIqkxChLtHdUHdTamiXTOuxEiFUMW2VhSyWqCUKbnvaymJc4wPvlxVTlGMXKb4Av4PTaFLS0CZMXPMxuvJTluk2E3btiuPxbaY6pmLG5sdjxuX6MBnmYuquibL0GmwrHGx8nSpCAsE/tiGwWq6OuALA4x+wR415Bkz6k6ykuyiuzUeMHmPp/wCrTgftoTk7BU3ImikHbVCBxCsmwzdC0WgrHT5BC1Rdku8uqSJYvia0BMhCwJSooMXW1Houtgx7V+Tm5p7mA0p6YijrRdWRB2boQ/IRpuoy12PZfVps1F7S4x4eh5rJqIZJ7VB0vJpwyhC3Jfovck7S1AWsc3V1G65et+mwSc4ujbp9W5NRaNFXzMELkRwM6FlZ+Jph+qPEtWye2vAtpXZPEYskRsEMMaRGLeqaLojg3ku0zvumZYpQ3AYpNyo7jm6DEpmnlviBmjsZzB1hMQSXQBAkybCEOeL7T6JjkumehdmciFBup96rhf8AtH9I/Mrzev13rvbH7V/uX0h/MMcGDqsuLC5MdixbuX0YvOcxJm67WnwpGziKooQt5nkwVWoiihLYOm5G0UJ1aku+SbGNIBuw+rYIKLE81dZvmn4PInKI97yTtoG4LRuhlwEg5fNgl1XLCsI6pFghUfJdkXVYRKNlN0VePxE+v0WvT4+TJnycUIreYz5WUEayLqrLqidPdUy4rkLQplzw0bkwhnNQg5PwHGLlKkP4p5H8EAGDuNyfNZMUVL/ObNGRtf5aC5dTdSqgObePaUGplHNiuLDwJ48nKNMQwidQ91w/cvB1dyO/hgLuiFW9vhEb8lHj8wPeeH4dh18l1MGmj6fu7Ofmzy3cdHfxJ5qehEH+okSZUOqWnZC4x2VIOMpKVxB1cRN3FNx49vEReTLu5kaDK67HVKRaLtew7bQRJXJzwnGMlL8m2EoySo9GxuLDW77rzWLG5MPFj3MyWZ4yZuuthxUbeFwZvE1pK6UI0hMpC7nJqQhsVc+6YlwLshVqw1FGNsGTpCtE3TZLgBMn3qraSxHMq4MN5XT8MK5E5ZXwLUwmyFoaD+ASdozcTFWBbdVssLdRDvCi2g2DqOPFEkC2V9YyVtxRpGLI7ZEBNANBkmQ64dUs3lzXK1ev2e2HZv0+k3cyLzNstpuY1jABBF+i52m1M4TcpM25sEZRpC2I7Os7vwfEnY/qM9/u6Fz0cNvt7M42jD4cYvE8l2XPdjtKznbNs6Y7ijSH/FNv5juSs+FZX/1P7DZuC+z+4FuIc9wGqJ3PE+ZTZY444XQMZynJKw2ZYlhIbTbp07kHcpGmxSScpu7GZ8kbqPgjh6rnh2qqQALCd+ivJCOOS2x7KhJyTuQTEY41dAgNDLWUhgWBSd3Zc8vq0q6G9LP6ll9SXwM9OHyCoblHLoqAvU3WmJlkbf8A032reQXE+tf6f2dDRdGgzff0C4uA6uPozWO4ro4imVL1sQmQJ6NCWKBM8CwGM4JuLsCfQKnsUUuwERPBWUysq/EVrX2oyPth6SWxngKEISDhUw0Rq7qLopgHokLkV9Xf1W+HRjl2Tw/xDzCk/tZce0bzCfAF5fJ9zO7Dom/ghQwMPyQFvoxWYf8AI7zXpcH/AEkcTN97BHYJ67FPohS3Un0SB8oQlQ3S5hRG8LsUjN2Ph0FSiz//2Q==" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;