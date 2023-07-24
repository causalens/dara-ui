import { faRankingStar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RankingStar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RankingStar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRankingStar} {...props} />;
};

export default RankingStar;
