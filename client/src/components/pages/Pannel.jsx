import React from "react";

const Pannel = () => {
  return (
    <div class="container-fluid">
    <h3>test</h3>
      
    </div>
  );
};

export default Pannel;

{/* <div class="row">
        <div class="col-12 col">
          <div class="page-title-box d-flex align-items-center justify-content-between">
            <h4 class="mb-0">Cart</h4>
            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="/ecommerce-cart">Ecommerce</a>
                </li>
                <li class="active breadcrumb-item" aria-current="page">
                  <a href="/ecommerce-cart">Cart</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8">
          <div class="border shadow-none card">
            <div class="card-body">
              <div class="d-flex border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="/static/media/img-1.7d8658df.png"
                    alt=""
                    class="avatar-lg"
                  />
                </div>
                <div class="flex-1 align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <a class="text-dark" href="/ecommerce-product-detail/1">
                        Half sleeve T-shirt
                      </a>
                    </h5>
                    <p class="mb-1">
                      Color : <span class="fw-medium">Maroon</span>
                    </p>
                    <p>
                      Size : <span class="fw-medium">08</span>
                    </p>
                  </div>
                </div>
                <div class="ml-2">
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-trash-alt"></i>
                      </a>{" "}
                    </li>
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Price</p>
                      <h5 class="font-size-16">$450</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Quantity</p>
                      <div style={{ width: "110px" }}>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <button type="button" class="btn btn-primary">
                              +
                            </button>
                          </div>
                          <input
                            name="demo_vertical"
                            readonly=""
                            type="text"
                            class="form-control"
                            value="2"
                          />
                          <div class="input-group-append">
                            <button type="button" class="btn btn-primary">
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Total</p>
                      <h5 class="font-size-16">$900</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border shadow-none card">
            <div class="card-body">
              <div class="d-flex border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="/static/media/img-2.1c8fac61.png"
                    alt=""
                    class="avatar-lg"
                  />
                </div>
                <div class="flex-1 align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <a class="text-dark" href="/ecommerce-product-detail/2">
                        Light blue T-shirt
                      </a>
                    </h5>
                    <p class="mb-1">
                      Color : <span class="fw-medium">Light blue</span>
                    </p>
                    <p>
                      Size : <span class="fw-medium">08</span>
                    </p>
                  </div>
                </div>
                <div class="ml-2">
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-trash-alt"></i>
                      </a>{" "}
                    </li>{" "}
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Price</p>
                      <h5 class="font-size-16">$225</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Quantity</p>
                      <div style={{ width: "110px" }}>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <button type="button" class="btn btn-primary">
                              +
                            </button>
                          </div>
                          <input
                            name="demo_vertical"
                            readonly=""
                            type="text"
                            class="form-control"
                            value="6"
                          />
                          <div class="input-group-append">
                            <button type="button" class="btn btn-primary">
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Total</p>
                      <h5 class="font-size-16">$225</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border shadow-none card">
            <div class="card-body">
              <div class="d-flex border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="/static/media/img-3.13e02027.png"
                    alt=""
                    class="avatar-lg"
                  />
                </div>
                <div class="flex-1 align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <a class="text-dark" href="/ecommerce-product-detail/3">
                        Black Color T-shirt
                      </a>
                    </h5>
                    <p class="mb-1">
                      Color : <span class="fw-medium">Black</span>
                    </p>
                    <p>
                      Size : <span class="fw-medium">08</span>
                    </p>
                  </div>
                </div>
                <div class="ml-2">
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-trash-alt"></i>
                      </a>{" "}
                    </li>{" "}
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Price</p>
                      <h5 class="font-size-16">$152</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Quantity</p>
                      <div style={{ width: "110px" }}>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <button type="button" class="btn btn-primary">
                              +
                            </button>
                          </div>
                          <input
                            name="demo_vertical"
                            readonly=""
                            type="text"
                            class="form-control"
                            value="2"
                          />
                          <div class="input-group-append">
                            <button type="button" class="btn btn-primary">
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Total</p>
                      <h5 class="font-size-16">$304</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border shadow-none card">
            <div class="card-body">
              <div class="d-flex border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="/static/media/img-4.ff280ca7.png"
                    alt=""
                    class="avatar-lg"
                  />
                </div>
                <div class="flex-1 align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <a class="text-dark" href="/ecommerce-product-detail/4">
                        Hoodie (Blue)
                      </a>
                    </h5>
                    <p class="mb-1">
                      Color : <span class="fw-medium">Blue</span>
                    </p>
                    <p>
                      Size : <span class="fw-medium">08</span>
                    </p>
                  </div>
                </div>
                <div class="ml-2">
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-trash-alt"></i>
                      </a>{" "}
                    </li>{" "}
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Price</p>
                      <h5 class="font-size-16">$145</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Quantity</p>
                      <div style={{ width: "110px" }}>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <button type="button" class="btn btn-primary">
                              +
                            </button>
                          </div>
                          <input
                            name="demo_vertical"
                            readonly=""
                            type="text"
                            class="form-control"
                            value="2"
                          />
                          <div class="input-group-append">
                            <button type="button" class="btn btn-primary">
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Total</p>
                      <h5 class="font-size-16">$290</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border shadow-none card">
            <div class="card-body">
              <div class="d-flex border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="/static/media/img-5.7524c50a.png"
                    alt=""
                    class="avatar-lg"
                  />
                </div>
                <div class="flex-1 align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <a class="text-dark" href="/ecommerce-product-detail/5">
                        Half sleeve T-Shirt
                      </a>
                    </h5>
                    <p class="mb-1">
                      Color : <span class="fw-medium">Light orange</span>
                    </p>
                    <p>
                      Size : <span class="fw-medium">08</span>
                    </p>
                  </div>
                </div>
                <div class="ml-2">
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-trash-alt"></i>
                      </a>{" "}
                    </li>{" "}
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Price</p>
                      <h5 class="font-size-16">$138</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Quantity</p>
                      <div style={{ width: "110px" }}>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <button type="button" class="btn btn-primary">
                              +
                            </button>
                          </div>
                          <input
                            name="demo_vertical"
                            readonly=""
                            type="text"
                            class="form-control"
                            value="8"
                          />
                          <div class="input-group-append">
                            <button type="button" class="btn btn-primary">
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Total</p>
                      <h5 class="font-size-16">$138</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="border shadow-none card">
            <div class="card-body">
              <div class="d-flex border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="/static/media/img-6.8d6e5eec.png"
                    alt=""
                    class="avatar-lg"
                  />
                </div>
                <div class="flex-1 align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <a class="text-dark" href="/ecommerce-product-detail/6">
                        Green color T-shirt
                      </a>
                    </h5>
                    <p class="mb-1">
                      Color : <span class="fw-medium">Green</span>
                    </p>
                    <p>
                      Size : <span class="fw-medium">08</span>
                    </p>
                  </div>
                </div>
                <div class="ml-2">
                  <ul class="list-inline mb-0 font-size-16">
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-trash-alt"></i>
                      </a>{" "}
                    </li>{" "}
                    <li class="list-inline-item">
                      <a class="text-muted px-2" href="/ecommerce-cart">
                        <i class="uil uil-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Price</p>
                      <h5 class="font-size-16">$152</h5>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Quantity</p>
                      <div style={{ width: "110px" }}>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <button type="button" class="btn btn-primary">
                              +
                            </button>
                          </div>
                          <input
                            name="demo_vertical"
                            readonly=""
                            type="text"
                            class="form-control"
                            value="2"
                          />
                          <div class="input-group-append">
                            <button type="button" class="btn btn-primary">
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Total</p>
                      <h5 class="font-size-16">$304</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="mt-5 mt-lg-0">
            <div class="border shadow-none card">
              <div class="card-header bg-transparent border-bottom py-3 px-4">
                <h5 class="font-size-16 mb-0">
                  Order Summary <span class="float-end">#MN0124</span>
                </h5>
              </div>
              <div class="p-4 card-body">
                <div class="table-responsive">
                  <table class=" mb-0 table">
                    <tbody>
                      <tr>
                        <td>Sub Total :</td>
                        <td class="text-end">$ 780</td>
                      </tr>
                      <tr>
                        <td>Discount : </td>
                        <td class="text-end">- $ 78</td>
                      </tr>
                      <tr>
                        <td>Shipping Charge :</td>
                        <td class="text-end">$ 25</td>
                      </tr>
                      <tr>
                        <td>Estimated Tax : </td>
                        <td class="text-end">$ 18.20</td>
                      </tr>
                      <tr class="bg-light">
                        <th>Total :</th>
                        <td class="text-end">
                          <span class="fw-bold">$ 745.2</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}