<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="bg-body-tertiary p-5 mt-3 rounded">
      <h3>Welcome to your assignments</h3>
    </div>

    <div class="mt-5">

      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4>Mathematics</h4>
        <p class="m-0">...see more</p>
      </div>

      <div class="wrapper">
        <div class="card position-relative" style="min-width: 16rem;">
          <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
            <div class="bg-warning px-1 mt-1">Mathematics</div>
            <div class="bg-info px-1 mt-1">BGCSE</div>
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title w-50">Numbers</h5>
            <p class="card-text mr-4">Fractions, Percentages and Decimals.</p>
            <a href="#" class="btn btn-primary">Start</a>
          </div>
        </div>

        <div class="card position-relative" style="min-width: 16rem;">
          <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
            <div class="bg-warning px-1 mt-1">Mathematics</div>
            <div class="bg-info px-1 mt-1">BGCSE</div>
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title w-75">Statistics and Probability</h5>
            <p class="card-text mr-4">Data Handling I.</p>
            <a href="#" class="btn btn-primary">Start</a>
          </div>
        </div>

        <div class="card position-relative" style="min-width: 16rem;">
          <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
            <div class="bg-warning px-1 mt-1">Mathematics</div>
            <div class="bg-info px-1 mt-1">BGCSE</div>
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title w-75">Discrete Mathematics</h5>
            <p class="card-text mr-4">Travel Graphs</p>
            <a href="#" class="btn btn-primary">Start</a>
          </div>
        </div>

        <div class="card position-relative" style="min-width: 16rem;">
          <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
            <div class="bg-warning px-1 mt-1">Mathematics</div>
            <div class="bg-info px-1 mt-1">BGCSE</div>
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title w-50">Algebra</h5>
            <p class="card-text mr-4">Simultaneuos equations.</p>
            <a href="#" class="btn btn-primary">Start</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <h4>Physics</h4>
  <p class="m-0">...see more</p>
</div>

<div class="wrapper">
  <div class="card position-relative" style="min-width: 16rem;">
    <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
      <div class="bg-secondary px-1 mt-1">Physics</div>
      <div class="bg-info px-1 mt-1">BGCSE</div>
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title w-50">Numbers</h5>
      <p class="card-text mr-4">Fractions, Percentages and Decimals.</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>

  <div class="card position-relative" style="min-width: 16rem;">
    <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
      <div class="bg-secondary px-1 mt-1">Physics</div>
      <div class="bg-info px-1 mt-1">BGCSE</div>
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title w-75">Statistics and Probability</h5>
      <p class="card-text mr-4">Data Handling I.</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>

  <div class="card position-relative" style="min-width: 16rem;">
    <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
      <div class="bg-secondary px-1 mt-1">Physics</div>
      <div class="bg-info px-1 mt-1">BGCSE</div>
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title w-75">Discrete Mathematics</h5>
      <p class="card-text mr-4">Travel Graphs</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>

  <div class="card position-relative" style="min-width: 16rem;">
    <div class="position-absolute top-0 end-0" style="font-size: 0.7rem;">
      <div class="bg-secondary px-1 mt-1">Physics</div>
      <div class="bg-info px-1 mt-1">BGCSE</div>
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title w-50">Algebra</h5>
      <p class="card-text mr-4">Simultaneuos equations.</p>
      <a href="#" class="btn btn-primary">Start</a>
    </div>
  </div>
</div>
</div>
  </main>
</template>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 8px;
}
</style>