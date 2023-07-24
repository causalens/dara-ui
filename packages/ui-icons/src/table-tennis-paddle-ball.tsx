import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TableTennisPaddleBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TableTennisPaddleBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTableTennisPaddleBall} {...props} />;
};

export default TableTennisPaddleBall;
