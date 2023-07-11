import React from "react";
import $ from "jquery";

const Work = (props) => {
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

  return (
    <div className="carasoul">
      <div class="options container">
        <div
          class="option active"
          style={{
            zoom: "100%",
            background:
              "center left url(https://lh3.googleusercontent.com/pw/AIL4fc_r9ZUEDACg3CFDqoK02Tc9UWZB6ndpNOvKJiGPwTXWcupdDYeV5-gttHlw5bpafCFBC-a04LRCd90KoxE-OUW_mRVKKQd1apoPXNXRxdYs1qIgvdg6DI6v0Aa1TJyqlLUdbBpfm_O5MQ0SkFYkJFUkAjKpUt6-KWabEmZz9dWLmHVhTE0JmxnsOVHb0CrfSEwFsWbWLKyCwq2LO52tXJOi7Ok1fwRPcvert90LAODO0MGsKdS_VY-trBCXB9oFJbjqU1ztNuxwws0HngfYhYXgy_tyZ-8u-WGiXzf8__6txeujSkN8hKS4Wi-DiAiwYmlToski_6hSPV5oshstUm4bfIjeFwraVdNWN9s_UWDvu83WORQKO7qGe4Xmc9g7tRZbQCMZpOFT9vgKO9Yl9Su2VY_M17kAa8jvHArWvunJ2e_BYCS-5lLUNqDwBoxMi-ry34jNsxvrXnitZuHXwrBw3CAJRCN7fyST-Byjn14UqnuwB7UQa8CqaYZK_bOntqrHesNAFVqzcVbOl-THXEZ7veh4goCo5WcjLzD8M_QhXij44DK8AUXemiJb1_FdFFYi1s-eWgLNEg6g2zZAKokvrShL8gVfbwRHkzItZP8h-yamd1Q2R8yhHykMRtveWRJI63SF5YmUXPcCAaFDmfkHjrrM3odhqhqD-Z6nHhymTesijNq3gSHXSQSPd0NCd3ehVpZZsMFSYzqNxbM_bJ92gyPR6fmM3kWkpkV_iJ0stlenhkUOOiBy6J2M3KTmkp_AhOhsRTY_dZQdP4JE2UsFuVUrADRK9gxZWMblCo9xdVcgSSASRln4_2upYQVviimJsRhAJqdr7w5NOcvcdPODuvkdyVBPgERkFh8nKfgCMgeUQQ4brmCNl-Z6akIsmZk90M2k5GWkp-JPyHbT2Tf7LStqrmimUW_55fXZvP4671pYYxiWbGxuhvoAKwuZzRfw-mWgR4W_Ab4koxWvrtdtN9-wGohZGIngqQUyFbbppLP53T9VDWXirmNCZMcshw=w652-h635-s-no?authuser=0)",
          }}
        >
          <div class="shadow"></div>
          <div class="label">
            <div class="icon">
              <i class="fas fa-walking"></i>
            </div>
            <div class="info">
              <div class="main">Ad title</div>
              <div class="sub">Ad small description</div>
            </div>
          </div>
        </div>
        <div
          class="option"
          style={{
            background:
              "center -110px url(https://lh3.googleusercontent.com/pw/AIL4fc8uiEHICQuo7OOHUAM2JmiTZw0vhw3nCUIh_IkZj1OztXrvOMmKdwM3NGAV7fhkjmu10WHlAz67Zy0SPtl0jRQrRr8FS71gNGjRnZunMwDc_64IYb72U8v3Zx4j9owxL-f_Pj4ZVv5dnBucNNEpivuiVWFjiZDMOsNJ5YN8YU_muEaDPXzfH76QflZSwfVsbcR8d74ShTEKGGgl5eiGh09X2vMsRcVubFmfn05DXGV2h-IBODNNwWM3HFGyubkCW-YmYG0SQAHajlpGVYd1TSZLQTRTqOW-YKZ_Dk5ya33p7pVN4hsbVMrLgEwdIds_1BPj_NfvkYKdw2etru_jcRwCaRtyQzw87iAPxkqPATpuaN8yDWLMxNsC0KbMnATAaQ9qntU45__DZ7bnuKfLWiR52xbsxvmMKPb34zmBdVDW7d2jev2h2NEf3esVNAFJy4DvSz0uaGr888tFc1E9HGLeNjMGszxa7_d2RsdO5gMfAJczSHxLCBW49-w3VHFkc_pOIZCUVpYGuIpqmsRAipwaOZN0Ew2jdbcWk_v_xZabYS6c0R9B62nmsKPe2U4t9fsoVUyxd7Hsx3ySej9Fyo-cFGoAySaXhCOAjWTNUHHglGa5CbtopK_5mE4Uscx_OxsKM_vKoz9d6ag3tcTEBoJkA1sg90iylNa_EuV-5hXDzgvuUtzObwpC3NDqcHwAfhQe7X1k-ACRijFNSJSattlzEKiZ02ZUFimjbLmYQCd5L6CDOWeGOecwL1csBog1m42zeMzrLwa74_ueCsNsIZ-cKILEQOvlp3Rx3X3V68cQBqOyChLf6XyOJsms1j3W2LyQL5UqUW3KqBh9mvzrpwXCXnC3g3Y1mnHbQIpfUYB8wATq3x5RZr7Xo41MA-sr3-91Dte0hRTHEV94iWnkvJozU7YAYhfig6SAzTnI9YJiOo3e3af_gMLaQWwlbo4zWcNJv6bgm0kGUWEVFvl_-_kJDsTtE3LqkeULKbYdY5pvCwnfvSDf3MbX2cve0nRjFA=w635-h635-s-no?authuser=0)",
          }}
        >
          <div class="shadow"></div>
          <div class="label">
            <div class="icon">{/* <i class="fas fa-snowflake"></i> */}</div>
            <div class="info">
              <div class="main">Ad title</div>
              <div class="sub">Ad small description</div>
            </div>
          </div>
        </div>
        <div
          class="option"
          style={{
            zoom: "100%",
            background:
              "center url(https://lh3.googleusercontent.com/pw/AIL4fc_TowPtZlSvznqx5IPiSaKZDA-vjsm9ZnIuJX6ym3WK009kunlH3bChzo4xaW4_Z0hYSfdrJnVYyxgWafIS6GucRcndt0ggHf0l4Kbu4h9C8gBfRKMM81qr1I10VcRwl5bYUM7Ct5Zu8CN1v7fGe-7h9pRjMe39eHf0PDjimf3_dIG_M-F0ujJDLSoFuQFxPFLvaJOUD_isRn99BEAEGIub7ikHg7qL_7Sj5_f-bE_OdJW00oHnkeh9_5N21HysIdwkVFJJXqt7ZpOkurQXqJsmg-eFI_j98u8MuZwiOXPT1EJmmN-aS-z78Nlbyee4RbkjogAsIgaEZbD4fo9rP6wIqyJpn0ICF-UOX3zKjWHqdSdnyaT5ANDR3Pkp1V-Fm6X0qAI8wruHs7srfWTNYGV79EV3DTcKvOaYIE_Xk2ex-Fb9ZIvDkxrQwZBsTXPAud4O6wgYzuw4neuLpIjgwIdr-rpdtICVorOnIxwa17053ZInhQ0j1JjIUy-y2thspEs524p2RGeYaz-xot-DgNzJpYXCDtzM9s7aOmkAbbhntgQCZbMJp2bDJ3C7vuXDxA2InMy5nxhSEbHYJf5e1BSWmj56Byb7mfkv7ldsuvw6Z_LxOR4szl0izI3rYBkWtii3kBq7wuu_h_78fYXWgP_VenkPJ-Uj42vfDYhh8hMwAoGSNeu02vQwwNgIc-Ie4I-FuJ5pRrhtV5cHKmtk73cIls7rln866cFyxdRuRiZKgQX1phFltDHNrzYsHIPQZZrrhjLfi-AGCiCIQwp-239AKBuONEo8EFna_yfxZFHkpKJoUPSJtXRI1Ck4toS5HOVLhd72VvXnWXPD-h4FoaxGUMOG2UmdbeRzy3kI0sOPqW0JBXM_8aemEaF-9wwedUvNfgy2mjU941nXuipQ_KKX5jyY1reIUhRRCBiQ4rFB64GQAvBfldm0O96kQljC2K32UM2GELyGLjWzu-pndD8uMUXc4PrSwa1FbfjEOBdtLcCmsSdxwC76tTecFgTwZw=w635-h635-s-no?authuser=0)",
          }}
        >
          <div class="shadow"></div>
          <div class="label">
            <div class="icon">{/* <i class="fas fa-tree"></i> */}</div>
            <div class="info">
              <div class="main">Ad title</div>
              <div class="sub">Ad small description</div>
            </div>
          </div>
        </div>
        <div
          class="option"
          style={{
            background:
              "center -60px url(https://lh3.googleusercontent.com/pw/AIL4fc_xV1uGTPLPzy54C__PvzJj-wHxofDPvbVG4nZKGvpzIqJxvOmt0Gxgrdi3IhncCRMEXi-NbP7bpme-TuKV_-KulHHGPTYQc78lfsKfHaX7frzqKshinlBH3K-hcY0YklrPv-jsRbte3vj2T5u3tb_4UMd3O8rwtM4OOo3_uB0pfDJFZzWRgBLVR_PXyQEKy3Llj8ZHUMOXuF79_N27T9uBBpYSlwHPMq-j9h47uC5VFbH9SE-ap-wB4toVTBiOmz50paZ8u1wWPeStrsf68kRPgZgPfdgS536lOe1bBbHQ2ofXxT7KJAO-egbyww5fzZCGroGoGQIgF2oveRKFDCm5a2h7tG2SzpvpJpfyJXWxFJYkT9NKwvWbWcfY8pKbxZXY-LObalmDHZ5pv_bCKWfQVDE0238NixQUqf4OD7GIS0z7Ve_bNFDiQYZ5FSdIjGYxFTf-kvF5lmMM7c0h6qBZaBTSa4zEvDVOyePkYrVEguEq5VWj5zEtP4esKet75okDP1xkNF9G3JNu8MwUSH8qsV_fHTCPTBuLC9496ULlIVDW2vozOEFkAWEXKJYeJPkNmdTcCDZtwo8sGkWHbXV8h_4UJInoBTy1ac_ACMxCycLYXuvgn2zsEg00DwXVwHsuxqpQDheFn8pDZBJ1J4m2z8a8e4cEaLpoJCugGza3sCPZ31GmyuzFpP_mDFHpE3VYUB8NrUJOopymY0AFVUL-L7TQB9BPVQijYWnnUQ2HWbmGDccW7sM6yAOBUbTsq-6ONk9LtE54jtqkfeFQffSSQFrx-j59l9EKLmdpTFlv8nbtZyKFaJgamKlR3bqMzeNkCDaTfeHcC-mq3Ij98IsInDLEKq7TGIXwzwuA4dqedsU-9CLeUJu-JYO4d2AUGR7PNLyfM1Le6gdI3P1vaj00Xrrit6yVUOJ__t_ChY1DmGw5QPB80p6fA5bQNwculozYaWCx2_MWEdUl6wDg0c7R5miuh_-fG5dHBeD9wbbGo2JlaRR8Cwz_OhUI0uIkSA=w635-h635-s-no?authuser=0)",
          }}
        >
          <div class="shadow"></div>
          <div class="label">
            <div class="icon">{/* <i class="fas fa-tint"></i> */}</div>
            <div class="info">
              <div class="main">Ad title</div>
              <div class="sub">Ad small description</div>
            </div>
          </div>
        </div>
        <div
          class="option"
          style={{
            background:
              "-20px center url(https://lh3.googleusercontent.com/pw/AIL4fc8kbVXRRDrxPjzMIjDxoWvSF9YG_EaRAHbuxgkGQ554fXTbWOrZ_cP-AGlBfQ4PoO56kWHZ00f_tKsw2mGQLyGKrEBWy-lEnSpvEmp5oHJcJ5_shzV6WTdrtvFJDSt7kX3LpwYG4QDM8TP-BOKsqUd8vFUStolKJt43Gv-FZm2OotccoB1Xorh8-WwxicmF2XtfaBN7xitDP_RAJzTyNO2iQoE2R0hMzXbBp9whiKxfiMIV9_l8y6NHZcLUJVhtrCQgrl23IOWdOuvFsVjSplUOGQufXH91MeLQX0yac_t551nMZZyNkldUnZzvXWXKXZp1J476fm3nFqxXXf6pc1ZzljB8kqglE6PtJify85C1LrulehLakXZSj1KyiAWfIwmwlJX1qoW3W9C1NVZiiwhgbV2Ux1cjXWGOYiU6UX8ecriF9iyHWVt6mMBt0Y0YehuZSJmXHM5xKBiP4L2-Bah5LzwDd6EdAV7efz1BdJctSN24YpdvN58AXK2pILuSeDNCPd1u-wDSw32FG2dBaqYcfgDtSULezyr0-2aAv70ybmourqoobs4lI20njxIaF7OoHhAPjtsULiLhQZoOReVAYQOwTM1l94GAGcqIsfwsfIfimTEdgN4Q5EhE-Z5ojfVrP8zFFKAdQ_wGRCfhFdJGa79fQJyCaNA8enaCh0UL7Ys3G0iwJ1xhhqrlu3oNtpH7_NVCWI5f4vdNxSC9asaL3jmDSYcK7l2aSPItBOFYIak1FzKumTWx3_pmP96RnadH2CSN7JAOeKQgkCjnkuYbtYo5My23TytZCW3OcJ2GyY41Cx5abxEiERHe_yjND1AKiTx1vpXxkDj2WhLDE5NiKGkpqGaWcUKH1Nwlam6lgybOjH4dRls7IZnCLitbGPgmFS-RiIRZYuh_v6C77OJPVn6S9UMjMs-XFGNLYP779ywWJ5mxY_xP1Ea3J2HXv9e2ukUVJfnO8JcDk6ih5K-NN-x6oUVOcb-jQH_hdsA85Re28q1nY6-lKvaXs552ew=w952-h635-s-no?authuser=0)",
          }}
        >
          <div class="shadow"></div>
          <div class="label">
            <div class="icon">{/* <i class="fas fa-sun"></i> */}</div>
            <div class="info">
              <div class="main">Ad title</div>
              <div class="sub">Ad small description</div>
            </div>
          </div>
        </div>
      </div>
      {/* <a className="button button-2 more">More</a> */}
    </div>
  );
};

export default Work;
