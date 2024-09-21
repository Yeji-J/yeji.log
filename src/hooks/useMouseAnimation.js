'use client'
import { useEffect } from 'react'

export default function useMouseAnimation(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w, h
    let balls = []
    let mouse = {
      x: undefined,
      y: undefined,
    }
    let rgb = [
      '#F09EA7',
      '#F6CA94',
      '#FAFABE',
      '#C1EBC0',
      '#C7CAFF',
      '#CDABEB',
      '#F6C2F3',
    ]

    function init() {
      resizeReset()
      animationLoop()
    }

    init()

    function resizeReset() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    function animationLoop() {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      drawBalls()

      let tmp = []
      for (let i = 0; i < balls.length; i++) {
        if (balls[i].time <= balls[i].ttl) {
          tmp.push(balls[i])
        }
      }
      balls = tmp

      requestAnimationFrame(animationLoop)
    }

    function drawBalls() {
      for (let i = 0; i < balls.length; i++) {
        balls[i].update()
        balls[i].draw()
      }
    }

    function mouseMove(e) {
      mouse.x = e.x
      mouse.y = e.y

      // for (let i = 0; i < 2; i++) {
      //   balls.push(new Ball())
      // }

      balls.push(new Ball())
    }

    function mouseOut() {
      mouse.x = undefined
      mouse.y = undefined
    }

    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min)) + min
    }

    function easeOutQuart(x) {
      return 1 - Math.pow(1 - x, 5)
    }

    class Ball {
      constructor() {
        this.start = {
          x: mouse.x + getRandomInt(-5, 5),
          y: mouse.y + getRandomInt(-5, 5),
          size: getRandomInt(3, 8),
        }
        this.end = {
          x: this.start.x + getRandomInt(-80, 80),
          y: this.start.y + getRandomInt(-80, 80),
        }

        this.x = this.start.x
        this.y = this.start.y
        this.size = this.start.size

        this.style = rgb[getRandomInt(0, rgb.length - 1)]
        this.time = 0
        this.ttl = 120
      }

      draw() {
        ctx.fillStyle = this.style
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }

      update() {
        if (this.time <= this.ttl) {
          let progress = 1 - (this.ttl - this.time) / this.ttl

          this.size = this.start.size * (1 - easeOutQuart(progress))
          this.x = this.x + (this.end.x - this.x) * 0.01
          this.y = this.y + (this.end.y - this.y) * 0.01
        }
        this.time++
      }
    }

    window.addEventListener('resize', resizeReset)
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseout', mouseOut)

    return () => {
      window.removeEventListener('resize', resizeReset)
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseout', mouseOut)
    }
  }, [])
}
