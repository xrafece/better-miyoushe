# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.4.0] - 2026-03-14

1. 修改悬浮按钮的移动逻辑，修复拖拽移动位置漂移的 bug，未确定多端表现是否一致，后续会跟进 mac/win 端表现统一
2. 调整米游社文章页面的宽度，同时放大帖主附图的品质，默认展示为高清图片，此项改动会降低图片加载速度。图片已被替换为官方高清 cdn 图片


## [1.3.16] - 2026-02-28
- 拦截原本的游戏工具导航条的接口内容，屏蔽原本的支付中心和签到福利入口
- 优化blob角色列表页面内存表现，在关闭页面时自动销毁内容，在已经打开页面时点击打开会重新聚焦已经打开的页面，防止重复打开。

## [1.3.15] - 2026-01-15
- 添加自动化流程，发布版本会自动运行工作流，GreasyFork会根据Webhook设置自动更新版本

## [1.3.14] - 2026-01-15
### Changed
- Initial CHANGELOG.md setup

## [1.3.12] - 2026-01-15
### Changed
- Previous releases (details not tracked in CHANGELOG)
