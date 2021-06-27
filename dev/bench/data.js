window.BENCHMARK_DATA = {
  "lastUpdate": 1624776197088,
  "repoUrl": "https://github.com/ohadravid/pyo3",
  "entries": {
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58fe202eb2513619d39a287bba5fc6473da8521",
          "message": "Merge pull request #1648 from davidhewitt/fix-cross-compile-config\n\npyo3-build-config: fix cross compilation",
          "timestamp": "2021-06-26T20:06:40+01:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/ohadravid/pyo3/commit/b58fe202eb2513619d39a287bba5fc6473da8521"
        },
        "date": 1624775681658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6960332.603860434,
            "unit": "iter/sec",
            "range": "stddev: 1.4909768095586147e-7",
            "extra": "mean: 143.6712951685001 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8523366.674484482,
            "unit": "iter/sec",
            "range": "stddev: 1.0722905676371617e-7",
            "extra": "mean: 117.32453127868975 nsec\nrounds: 94331"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3074418.976413386,
            "unit": "iter/sec",
            "range": "stddev: 2.8046314964138293e-7",
            "extra": "mean: 325.26471104688943 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2039547.8948975303,
            "unit": "iter/sec",
            "range": "stddev: 8.145200634550496e-7",
            "extra": "mean: 490.30473984036945 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2128336.114749534,
            "unit": "iter/sec",
            "range": "stddev: 8.442106106022736e-7",
            "extra": "mean: 469.8505997572106 nsec\nrounds: 25840"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1892894.695662847,
            "unit": "iter/sec",
            "range": "stddev: 5.18449787544962e-7",
            "extra": "mean: 528.2914059039495 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1567258.7150807122,
            "unit": "iter/sec",
            "range": "stddev: 5.806209104523501e-7",
            "extra": "mean: 638.0567486258543 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1523273.4247860853,
            "unit": "iter/sec",
            "range": "stddev: 3.7748015706414337e-7",
            "extra": "mean: 656.4809598384747 nsec\nrounds: 76336"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1618401.3774375063,
            "unit": "iter/sec",
            "range": "stddev: 0.000001395877873949137",
            "extra": "mean: 617.8936906141425 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1564537.620411738,
            "unit": "iter/sec",
            "range": "stddev: 3.848587618520917e-7",
            "extra": "mean: 639.1664776568227 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2219828.8670524727,
            "unit": "iter/sec",
            "range": "stddev: 3.557759404404728e-7",
            "extra": "mean: 450.48517696217226 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4383977.641536574,
            "unit": "iter/sec",
            "range": "stddev: 3.807295447193249e-7",
            "extra": "mean: 228.10335311142072 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5810727.660952089,
            "unit": "iter/sec",
            "range": "stddev: 1.0345228710998561e-7",
            "extra": "mean: 172.0954858579965 nsec\nrounds: 64103"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7046086.903771391,
            "unit": "iter/sec",
            "range": "stddev: 8.616690238154687e-8",
            "extra": "mean: 141.9227457249352 nsec\nrounds: 86957"
          }
        ]
      }
    ],
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58fe202eb2513619d39a287bba5fc6473da8521",
          "message": "Merge pull request #1648 from davidhewitt/fix-cross-compile-config\n\npyo3-build-config: fix cross compilation",
          "timestamp": "2021-06-26T20:06:40+01:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/ohadravid/pyo3/commit/b58fe202eb2513619d39a287bba5fc6473da8521"
        },
        "date": 1624776177074,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94140,
            "range": "± 6067",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 270836,
            "range": "± 19137",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2744837,
            "range": "± 136588",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5402588,
            "range": "± 311785",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3234184,
            "range": "± 128768",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10067702,
            "range": "± 514341",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13319391,
            "range": "± 744730",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8018878,
            "range": "± 374816",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 113,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1564944,
            "range": "± 146311",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1741963,
            "range": "± 118126",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 773214,
            "range": "± 58874",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5492,
            "range": "± 22232",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4509,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2049552,
            "range": "± 125824",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9944995,
            "range": "± 459148",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11353697,
            "range": "± 519750",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5927064,
            "range": "± 236651",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 951587,
            "range": "± 40690",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1696088,
            "range": "± 90847",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 488478,
            "range": "± 27095",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}