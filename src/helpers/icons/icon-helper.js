import { getAxiosInstance, getIconApi } from '../shared/user-login';
import { CATALOG_API_BASE } from '../../utilities/constants';

const axiosInstance = getAxiosInstance();
const iconApi = getIconApi();

export function getPortfolioItem(portfolioItemId) {
  return axiosInstance.get(`${CATALOG_API_BASE}/portfolio_items/${portfolioItemId}`);
}

export function getIcon(iconId) {
  return iconApi.showIconData(iconId);
}

export async function createIcon(iconData) {
  return await iconApi.iconsPost(iconData);
}

