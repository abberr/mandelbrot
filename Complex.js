class Complex {

    constructor(real, im) {
        this.real = real;
        this.im = im;
    }

    square() {
        return new Complex(this.real * this.real - this.im * this.im, this.real * this.im + this.im * this.real);
    }

    multiply(c) {
        return new Complex(this.real * c.real - this.im * c.im, this.real * c.im + this.im * c.real);
        // return new Complex(this.real * c.real - this.im * c.im, this.real * c.im + this.im * c.real);
    }

    plus (c) {
        return new Complex(this.real + c.real, this.im + c.im);
    }

    // operator fun times(c: Complex) = Complex(real * c.real - imaginary * c.imaginary, real * c.imaginary + imaginary * c.real)
    // operator fun plus(c: Complex) = Complex(real + c.real, imaginary + c.imaginary)
    //
    // override fun toString(): String = "($real, $imaginary)"

}