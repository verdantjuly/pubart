const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDebug = process.env.BUILD_TYPE.includes("dev");

// 디버그 상태일때는 서비스 워커를 사용하지 않습니다.
let entry;
if (isDebug) {
    entry = { main: "./src/index.tsx" }
} else {
    entry = { main: "./src/index.tsx", sw: "./src/sw.ts" }
}

module.exports = {
    mode: isDebug ? "development" : "production",
    entry: entry,
    output: { publicPath: "/" },
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            { // TSX 파일을 JS 파일로 변환하고 이를 로드합니다.
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            { // TSX 내에서의 CSS 파일을 번들러에 포함합니다.
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            { // 로드할 에셋 리소스의 파일 확장자를 선언합니다.
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CSSMinimizerPlugin({
            parallel: true, // 병렬 처리
            minify: [
                CSSMinimizerPlugin.cssoMinify,
                CSSMinimizerPlugin.cssnanoMinify,
                // CSSMinimizerPlugin.cleanCssMinify
            ]
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.jsp", // 입력
            filename: "./index.html",    // 출력

            // 디버그 상태일 때, CSS 또는 JS를 포함한 정적 리소스들이 인라인 형태로 문서에 병합되지 않고 변경 사항을 추적하기 위해
            // 별도로 클라이언트에서 비동기적으로 요청하도록 합니다.
            inject: isDebug,
            minify: false,
        }),
        new Webpack.DefinePlugin({"process.env.IS_DEBUG": isDebug})
    ],
    // 에셋 리소스 크기의 대한 모든 경고를 무시합니다. (i.g. font)
    performance: { hints: false },
    optimization: {
        minimize: !isDebug,
        minimizer: [new TerserPlugin({minify: TerserPlugin.swcMinify})],
    },
}