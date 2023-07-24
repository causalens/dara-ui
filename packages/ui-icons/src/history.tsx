import { faHistory } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * History icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const History = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHistory} {...props} />;
};

export default History;
