import anime from 'animejs'

export function revealh3 (event) {
  const target = event

  target.querySelector('.letters').innerHTML = target.querySelector('.letters').textContent.replace(/[^ ]/ig, '<span class=\'letter\'>$&</span>')

  anime.timeline()
    .add({
      targets: target.querySelector('.line'),
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 700
    })
    .add({
      targets: target.querySelector('.line'),
      translateX: [0, target.clientWidth],
      easing: 'easeOutExpo',
      duration: 700,
      delay: 100
    })
    .add({
      targets: target.querySelectorAll('.letter'),
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=775',
      delay: function (el, i) {
        return 34 * (i + 1)
      }
    })
    .add({
      targets: target.querySelector('.line'),
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000
    })
}
